// pages/gallery.js
import GalleryItem from "@/components/common/galary_items";
import Footer from "@/components/footer/Footer";
const galleryData = [
  { imageSrc: "/demon.jpeg", title: "SAmikskhya Choor" },
  { imageSrc: "/", title: "" },
  { imageSrc: "/", title: "" },
  { imageSrc: "/", title: "" },
  { imageSrc: "/", title: "" },
  { imageSrc: "/", title: "" },
];

const GalleryPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <GalleryItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
