// components/GalleryItem.js
import Image from "next/image";

const GalleryItem = ({ imageSrc, title }) => {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="rounded-t-lg object-cover w-full"
      />
      <div className="p-4 text-center bg-white">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
