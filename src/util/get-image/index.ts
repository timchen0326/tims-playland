// util/get-image.ts
import fs from 'fs';
import path from 'path';

export function getImages(value: string) {
  const imagesDir = path.join(process.cwd(), `public/images/${value}`);
  const fileNames = fs.readdirSync(imagesDir);

  const images = fileNames.map(fileName => ({
    src: `/images/${value}/${fileName}`, // Include the 'value' parameter in the path
    alt: fileName.replace(/\.[^/.]+$/, ""),
  }));

  return images;
}