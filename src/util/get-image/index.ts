// util/get-image.ts
import fs from 'fs';
import path from 'path';

export function getImages(value: string) {
  const imagesDir = path.join(process.cwd(), `public/images/${value}`); // Adjust the path as needed
  const fileNames = fs.readdirSync(imagesDir);

  const images = fileNames.map(fileName => ({
    src: `/images/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, ""),
  }));

  return images;
}
