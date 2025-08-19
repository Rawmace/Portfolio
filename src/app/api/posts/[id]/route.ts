import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export const config = { api: { bodyParser: false } };

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const { id } = params;

  const uploadsDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  const formData = await req.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const tagsRaw = formData.get("tags") as string | null;
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()) : [];

  const backgroundFile = formData.get("backgroundImage") as File | null;
  let backgroundImagePath: string | undefined;
  if (backgroundFile && backgroundFile.size > 0) {
    const buffer = Buffer.from(await backgroundFile.arrayBuffer());
    const filename = Date.now() + "-" + backgroundFile.name;
    fs.writeFileSync(path.join(uploadsDir, filename), buffer);
    backgroundImagePath = `/uploads/${filename}`;
  }

  const updated = await Post.findByIdAndUpdate(
    id,
    { title, content, tags, ...(backgroundImagePath && { backgroundImage: backgroundImagePath }) },
    { new: true }
  );

  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const { id } = params;

  const blog = await Post.findByIdAndDelete(id);
  if (blog?.backgroundImage) {
    const filePath = path.join(process.cwd(), "public", blog.backgroundImage);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

  return NextResponse.json({ success: true });
}
