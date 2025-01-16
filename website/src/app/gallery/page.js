'use client';
import GalleryItem from "@/components/common/galary_items";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/navigation";

const galleryData = [
  { imageSrc: "/events/event1.jpg", title: "Info Session",day:'06',month:'Dec' },
  { imageSrc: "/events/event2.jpg", title: "Experience Sharing",day:'17',month:'Dec' },
  { imageSrc: "/events/event3.jpg", title: "Info Sharing",day:'23',month:'Dec' },
  // { imageSrc: "/hult_image/people.jpg", title: "Events Loading",day:'24',month:'Nov' },
  // { imageSrc: "/hult_image/people.jpg", title: "Events Loading",day:'24',month:'Nov' },
  // { imageSrc: "/hult_image/people.jpg", title: "Events Loading" ,day:'24',month:'Nov'},
  // { imageSrc: "/hult_image/people.jpg", title: "Events Loading" ,day:'24',month:'Nov'},
  // { imageSrc: "/hult_image/people.jpg", title: "Events Loading" ,day:'24',month:'Nov'},
  // { imageSrc: "/hult_image/people.jpg", title: "Events Loading" ,day:'24',month:'Nov'},
];

const GalleryPage = () => {
  return (
    <div>
      <div className="">
        <h3 className=" font-bold text-center mb-8">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-6 pb-10 px-16">
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
