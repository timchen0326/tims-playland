// pages/api/images.ts
import fs from 'fs';
import path from 'path';

export default function handler(req: { query: { query: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { src: string; alt: string; }[]): void; new(): any; }; }; }) {
  const { query } = req.query;

  try {
    const images = getImages(query.value);
    res.status(200).json(images);
  } catch (err) {
    console.error(err);
  }
}

export function getImages(value: string) {
  const imagesDir = path.join(process.cwd(), `public/images/${value}`); // Adjust the path as needed
  const fileNames = fs.readdirSync(imagesDir);

  const images = fileNames.map(fileName => ({
    src: `/images/${value}/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, ""),
  }));

  return images;
}
