// components/GalleryItem.js
import Image from "next/image";

const GalleryItem = ({ imageSrc, title }) => {
  return (
    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <Image
        src={imageSrc}
        alt={title}
        width={700}
        height={700}
        className="rounded-t-lg object-cover w-full"
      />
      <div className="absolute -bottom-2 w-80 -left-2 rounded-lg  text-center bg-white text-blackMain shadow-2xl flex items-center ">
        <div className="bg-accent text-white font-poppins font-semibold h-full p-6 rounded-l-lg">date</div>
        <h3 className="text-lg font-medium flex justify-center w-full">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
