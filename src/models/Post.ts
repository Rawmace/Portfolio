import mongoose, { Schema, Document } from "mongoose";

export interface PostDocument extends Document {
  title: string;
  content: string;
 
  backgroundImage?: string;
  slug: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<PostDocument>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true }, // supports Markdown
    
    backgroundImage: { type: String, default: "" }, // optional background image
    slug: { type: String, required: true, unique: true, lowercase: true },
    tags: { type: [String], default: [] }, // optional tags array
  },
  { timestamps: true } // automatically manages createdAt and updatedAt
);

// Optional: pre-save hook to auto-generate slug from title if not provided
PostSchema.pre("validate", function (next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  next();
});

export default mongoose.models.Post || mongoose.model<PostDocument>("Post", PostSchema);
