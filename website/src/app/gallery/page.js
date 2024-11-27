// pages/gallery.js
import GalleryItem from "@/components/common/galary_items";
import Footer from "@/components/footer/Footer";
const galleryData = [
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" },
];

const GalleryPage = () => {
  return (
    <div>
      <div className="container mx-auto py-10 px-4">
        <h3 className=" font-bold text-center mb-8">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((item, index) => (
            <GalleryItem
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GalleryPage;
