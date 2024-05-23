import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs/promises';

type BlogData = {
  title: string;
  content: string;
  author: string;
  slug: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogData[] | { error: string }>
) {
  try {
    // Read directory contents
    const files = await fs.readdir("blogdata");
    const allBlogs = [];

    for (const file of files) {
      console.log(file);
      // Read file contents
      const content = await fs.readFile(`blogdata/${file}`, 'utf8');
      const parsedContent = JSON.parse(content);
      allBlogs.push(parsedContent);
    }

    // Send all blog contents as response
    res.status(200).json(allBlogs);
  } catch (error) {
    // Handle errors (e.g., directory not found, file read errors)
    console.error(error);
    res.status(500).json({ error: "Failed to read blog data" });
  }
}
