// app/gallery/page.tsx
import Image from 'next/image';

interface ImageType {
  src: string;
  alt: string;
}

const Gallery = async () => {
  const res = await fetch(`/api/images?value=sally`);
  const images: ImageType[] = await res.json();

  if (!images || images.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {images.map((image: ImageType, index: number) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;