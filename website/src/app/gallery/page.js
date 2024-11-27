// pages/gallery.js
import GalleryItem from "@/components/common/galary_items";
import Footer from "@/components/footer/Footer";
const galleryData = [
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor",day:'24',month:'Nov' },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor",day:'24',month:'Nov' },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor",day:'24',month:'Nov' },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor",day:'24',month:'Nov' },
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" ,day:'24',month:'Nov'},
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" ,day:'24',month:'Nov'},
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" ,day:'24',month:'Nov'},
  { imageSrc: "/demon.jpeg", title: "Samikskhya Choor" ,day:'24',month:'Nov'},
];

const GalleryPage = () => {
  return (
    <div>
      <div className="">
        <h3 className=" font-bold text-center mb-8">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4 px-16">
          {galleryData.map((item, index) => (
            <GalleryItem
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              day={item.day}
              month={item.month}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GalleryPage;
