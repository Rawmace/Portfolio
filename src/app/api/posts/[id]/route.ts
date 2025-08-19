// src/app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export const config = {
  api: { bodyParser: false }, // required for FormData
};

// PATCH: update a blog by ID
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> } // params must be awaited
) {
  const { id } = await context.params;
  await dbConnect();

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

// DELETE: remove a blog by ID
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> } // params must be awaited
) {
  const { id } = await context.params;
  await dbConnect();

  const blog = await Post.findByIdAndDelete(id);

  // Delete background image file if it exists
  if (blog?.backgroundImage) {
    const filePath = path.join(process.cwd(), "public", blog.backgroundImage);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

  return NextResponse.json({ success: true });
}
