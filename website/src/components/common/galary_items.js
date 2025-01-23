// components/GalleryItem.js
const GalleryItem = ({ imageSrc, title,day,month }) => {  
  return (
    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <img
        src={imageSrc}
        alt={title}
        width={700}
        height={700}
        className={`rounded-lg object-cover w-full h-full`}
      />
      <div className={`absolute -bottom-2  -left-2 rounded-lg  text-center bg-white text-blackMain shadow-2xl flex items-center `}>
        <div className="bg-accent text-white font-poppins font-semibold h-full  p-1 w-20 rounded-l-lg">
            <p className="text-white">{day}</p>
            <p className="text-white">{month}</p>
          </div>
        <h3 className="text-lg font-medium flex justify-center w-full">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
