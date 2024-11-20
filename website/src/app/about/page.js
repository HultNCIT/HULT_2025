import Pill_outline from "@/components/common/Pill_outline";
import Footer from "@/components/footer/Footer";
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
          <div className="my-4">
            <Pill_outline className="text-sm" name="ABOUT US"/>
          </div>

          {/* Main Heading */}
          <h1 className="poppins-semibold text-4xl font-bold text-gray-800 mb-6">
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
        {/* Right Content Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-12">

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Regional Summit
          </h1>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
          Summits (June): Global Summits in eight cities witness the enthusiastic participation of thousands pitching their social venture ideas. Winning teams and those from the Second Chance Round, propelled by the OnCampus Program, progress to the Global Accelerator.
          </p>
          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Global Accelerator

          </h2>
          {/* Additional Description */}
          <p className="text-gray-600 leading-relaxed">
          Global Accelerator (July - August): Twelve semi-finalist teams, , refine their pitches with mentors. The journey continues as they travel to London for an intensive two-week program, and six standout teams are chosen for the prestigious Global Finals.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Global Finals
          </h2>
          {/* Additional Description */}
          <p className="text-gray-600 leading-relaxed">
          Global Finals (September): At the pinnacle, six finalist teams, present their social ventures to judges, aiming for the coveted $1,000,000 Hult Prize.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="w-full md:w-1/3 my-4">
          <img
            src="image.png" // Replace with your image path
            alt="Hult Prize Event"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
