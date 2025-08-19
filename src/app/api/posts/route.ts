// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export const config = {
  api: {
    bodyParser: false, // required for FormData
  },
};

// GET: fetch all posts
export async function GET() {
  await dbConnect();
  const posts = await Post.find({});
  return NextResponse.json(posts);
}

// POST: handle FormData uploads
export async function POST(req: Request) {
  await dbConnect();

  const uploadsDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  // Parse incoming FormData
  const formData = await req.formData();

  // Extract text fields
  const title = (formData.get("title") as string) || "Untitled";
  const content = (formData.get("content") as string) || "";
  const tagsRaw = formData.get("tags") as string | null;
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()) : [];

  // Handle background image
  const backgroundFile = formData.get("backgroundImage") as File | null;
  let backgroundImagePath: string | undefined;

  if (backgroundFile && backgroundFile.size > 0) {
    const buffer = Buffer.from(await backgroundFile.arrayBuffer());
    // Ensure unique filename
    const timestamp = Date.now();
    const safeName = backgroundFile.name.replace(/\s+/g, "-");
    const filename = `${timestamp}-${safeName}`;
    const filePath = path.join(uploadsDir, filename);

    fs.writeFileSync(filePath, buffer);
    backgroundImagePath = `/uploads/${filename}`;
  }

  // Create new post
  const newPost = await Post.create({
    title,
    content,
    tags,
    backgroundImage: backgroundImagePath,
  });

  return NextResponse.json(newPost);
}
