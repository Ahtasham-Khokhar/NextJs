// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://localhost:3000/api/getblog?slug=sdfsdf
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  content?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { slug } = req.query;

  if (typeof slug !== "string") {
    res.status(400).json({ error: "Invalid slug provided" });
    return;
  }

  fs.readFile(`blogdata/${slug}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "No Such Blog Found" });
      return;
    }

    try {
      const content = JSON.parse(data);
      console.log(slug);
      res.status(200).json({ content });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: "Error parsing blog data" });
    }
  });
}
