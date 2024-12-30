'use client';
import GalleryItem from "@/components/common/galary_items";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/navigation";

const galleryData = [
  { imageSrc: "/events/Infosession.jpg", title: "Info Session", day: '06', month: 'Dec' },
  { imageSrc: "/events/expSharing.jpg", title: "Experience Sharing", day: '17', month: 'Dec' },
];

const GalleryPage = () => {
  const router = useRouter();

  const handleNavigation = (item) => {
    router.push(`/blog?imageSrc=${item.imageSrc}&title=${item.title}&day=${item.day}&month=${item.month}`);
  };

  return (
    <div>
      <div className="relative">
        <h3 className="font-bold text-center mb-8">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-6 pb-10 px-16">
          {galleryData.map((item, index) => (
            <div key={index} onClick={() => handleNavigation(item)}>
              <GalleryItem
                imageSrc={item.imageSrc}
                title={item.title}
                day={item.day}
                month={item.month}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
