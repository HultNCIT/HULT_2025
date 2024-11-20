import Pill_outline from "@/components/common/Pill_outline";
import Footer from "@/components/footer/Footer";
export default function AboutPage() {
  return (
    <div className="min-h-screen font-poppins ">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-32 px-6 md:px-20">
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
            <Pill_outline className="text-sm" name="ABOUT US" color='border-color'/>
          </div>

          {/* Main Heading */}
          <h4 className=" font-bold mb-6">
            HULT PRIZE EVENT
          </h4>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            In slightly more than ten years, the foundation has invested over $100 million in the impact sector, which
            it played a crucial role in establishing. With a presence on over 1500 college and university campuses
            across 121 countries, and boasting a global team exceeding 30,000 members, including staff, student
            volunteers, and change-makers, the Hult Prize remains a transformative global leader in 21st-century
            education, soft skills training, and entrepreneurial development.
          </p>
          {/* Subheading */}
          <h4 className="font-bold  mb-4">
            OnCampus Event
          </h4>
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
         <div className="about-content">
           
           <h4 className=" font-bold  mb-6">
           Regional Summit
           </h4>
           {/* Description */}
           <p className="text-gray-600 leading-relaxed mb-6">
           Summits (June): Global Summits in eight cities witness the enthusiastic participation of thousands pitching their social venture ideas. Winning teams and those from the Second Chance Round, propelled by the OnCampus Program, progress to the Global Accelerator.
           </p>
         </div>
          {/* Subheading */}
          <div className="about-content">
            <h4 className="font-bold  mb-4">
            Global Accelerator
            </h4>
            {/* Additional Description */}
            <p className="text-gray-600 leading-relaxed">
            Global Accelerator (July - August): Twelve semi-finalist teams, , refine their pitches with mentors. The journey continues as they travel to London for an intensive two-week program, and six standout teams are chosen for the prestigious Global Finals.
            </p>
          </div>
          <div className="about-content">
            <h4 className=" font-bold  mb-4">
            Global Finals
            </h4>
            {/* Additional Description */}
            <p className="text-gray-600 leading-relaxed">
            Global Finals (September): At the pinnacle, six finalist teams, present their social ventures to judges, aiming for the coveted $1,000,000 Hult Prize.
            </p>
          </div>
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
