import Pill_outline from "@/components/common/Pill_outline";

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen bg-white">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-12 px-6 md:px-20">
        {/* Left Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src="image.png" // Replace with your image path
            alt="Hult Prize Event"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-12">
          {/* ABOUT US Badge */}
     <p className="my-4">
     <Pill_outline className="text-sm" name="ABOUT US"/>
     </p>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            HULT PRIZE EVENT
          </h1>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            In slightly more than ten years, the foundation has invested over $100 million in the impact sector, which
            it played a crucial role in establishing. With a presence on over 1500 college and university campuses
            across 121 countries, and boasting a global team exceeding 30,000 members, including staff, student
            volunteers, and change-makers, the Hult Prize remains a transformative global leader in 21st-century
            education, soft skills training, and entrepreneurial development.
          </p>
          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            OnCampus Event
          </h2>
          {/* Additional Description */}
          <p className="text-gray-600 leading-relaxed">
            Qualifiers (November - February): The OnCampus Program and Open Application are underway, and our NCIT is
            actively driving the success of the OnCampus Program. Campus Directors organize various events, and winning
            teams, carefully selected by our esteemed judging panel, move forward to the next stage.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-12 px-6 md:px-20">
        {/* Left Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src="image.png" // Replace with your image path
            alt="Hult Prize Event"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-12">
          {/* ABOUT US Badge */}
     <p className="my-4">
     <Pill_outline className="text-sm" name="ABOUT US"/>
     </p>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            HULT PRIZE EVENT
          </h1>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            In slightly more than ten years, the foundation has invested over $100 million in the impact sector, which
            it played a crucial role in establishing. With a presence on over 1500 college and university campuses
            across 121 countries, and boasting a global team exceeding 30,000 members, including staff, student
            volunteers, and change-makers, the Hult Prize remains a transformative global leader in 21st-century
            education, soft skills training, and entrepreneurial development.
          </p>
          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            OnCampus Event
          </h2>
          {/* Additional Description */}
          <p className="text-gray-600 leading-relaxed">
            Qualifiers (November - February): The OnCampus Program and Open Application are underway, and our NCIT is
            actively driving the success of the OnCampus Program. Campus Directors organize various events, and winning
            teams, carefully selected by our esteemed judging panel, move forward to the next stage.
          </p>
        </div>
      </div>
    </div>
  );
}
