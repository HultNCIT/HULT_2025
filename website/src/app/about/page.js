import Pill_outline from "@/components/common/Pill_outline";
import TeamCard from "@/components/common/team";
import Footer from "@/components/footer/Footer";
export default function AboutPage() {
  return (
    <section>
      <div className="min-h-screen max-w-8xl mx-auto">
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
          <div className="w-full md:w-2/3 flex flex-col justify-center gap-8 pl-0 mt-4 md:pl-12">
            {/* ABOUT US Badge */}
            <div className="my-4">
              <Pill_outline
                className="text-sm"
                name="ABOUT US"
                color="border-color"
              />
            </div>
            {/* Main Heading */}
            <div className="main-heading">
              <h4 className="font-bold">HULT PRIZE EVENT</h4>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                In slightly more than ten years, the foundation has invested
                over $100 million in the impact sector, which it played a
                crucial role in establishing. With a presence on over 1500
                college and university campuses across 121 countries, and
                boasting a global team exceeding 30,000 members, including
                staff, student volunteers, and change-makers, the Hult Prize
                remains a transformative global leader in 21st-century
                education, soft skills training, and entrepreneurial
                development.
              </p>
            </div>
            {/* Subheading */}
            <div className="main-heading">
              <h4 className="font-bold">OnCampus Event</h4>
              {/* Additional Description */}
              <p className="text-gray-600 leading-relaxed">
                Qualifiers (November - February): The OnCampus Program and Open
                Application are underway, and our NCIT is actively driving the
                success of the OnCampus Program. Campus Directors organize
                various events, and winning teams, carefully selected by our
                esteemed judging panel, move forward to the next stage.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-6 px-6 md:px-20">
          {/* Right Content Section */}
          <div className="w-full md:w-2/3 flex flex-col justify-center gap-8 mb-4 pl-0 md:pl-12">
            {/* Main Heading */}
            <div className=" about-content main-heading">
              <h4 className=" font-bold">Regional Summit</h4>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                Summits (June): Global Summits in eight cities witness the
                enthusiastic participation of thousands pitching their social
                venture ideas. Winning teams and those from the Second Chance
                Round, propelled by the OnCampus Program, progress to the Global
                Accelerator.
              </p>
            </div>
            {/* Subheading */}
            <div className="about-content main-heading">
              <h4 className="font-bold">Global Accelerator</h4>
              {/* Additional Description */}
              <p className="text-gray-600 leading-relaxed">
                Global Accelerator (July - August): Twelve semi-finalist teams,
                , refine their pitches with mentors. The journey continues as
                they travel to London for an intensive two-week program, and six
                standout teams are chosen for the prestigious Global Finals.
              </p>
            </div>
            <div className="about-content main-heading">
              <h4 className=" font-bold">Global Finals</h4>
              {/* Additional Description */}
              <p className="text-gray-600 leading-relaxed">
                Global Finals (September): At the pinnacle, six finalist teams,
                present their social ventures to judges, aiming for the coveted
                $1,000,000 Hult Prize.
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
        <div className="py-10">
          <div className="flex justify-center pb-10 w-full">
            <h2 className=" font-bold border-b-4 border-accent">Our Team</h2>
          </div>
          <div className="px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <TeamCard
              name="Samikshya Ghimire"
              position="Campus Director"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
            <TeamCard
              name="Chandal Chudelni"
              position="Blood Hunter"
              image="/demon.jpeg"
              facebook="https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d"
              instagram="https://www.instagram.com/samikshyaxx/"
              linkedin="https://www.linkedin.com/in/samikshya-ghimire-2222222xx/"
              twitter="bla"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
