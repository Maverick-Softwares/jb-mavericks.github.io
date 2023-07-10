import TeamMemberCard from "./TeamMemberCard";
import alexImg from "../../assets/team/Photo_Alex.jpg";
import adibImg from "../../assets/team/adib-Photo.jpg";
import mostafizImg from "../../assets/team/mostafiz.jpg";
import anikImg from "../../assets/team/anik.jpg";
const OurTeam = () => {
  const teamArr = [
    {
      name: "Shaon Indrajit Barua Alex ",
      linkedIn: "https://www.linkedin.com/in/indrajit-alex/",
      github: "https://github.com/alex-pythonista",
      designation: "Chief Technical Advisor",
      profile: alexImg,
    },
    {
      name: "Mohammed Adib",
      linkedIn: "https://www.linkedin.com/in/adib550/",
      github: "https://github.com/ADIB-the-NOOB",
      designation: "Co-Founder & Software Engineer",
      profile: adibImg,
    },
    {
      name: "Mostafijur Rahman",
      linkedIn: "https://www.linkedin.com/in/mostafijur-rahman-543713202/",
      github: "https://github.com/mostafijur566",
      designation: "Software Engineer",
      profile: mostafizImg,
    },
    {
      name: "Anik Kanti Dev",
      linkedIn: "https://www.linkedin.com/in/anikkdev/",
      github: "https://github.com/anikKDev",
      designation: "Software Engineer",
      profile: anikImg,
    },
  ];
  return (
    <div className="my-16 px-8">
      <div className=" w-3/5 text-center mx-auto">
        <h2 className="text-5xl font-semibold mb-8">Our Team</h2>
        <p className="text-gray-500 text-xl">
          At Maverick Softwares, our team is a dedicated group of skilled
          professionals with expertise in web app, desktop app, mobile app
          development, and server maintenance. We are passionate about
          delivering exceptional software solutions and continuously stay ahead
          in the ever-evolving technology landscape. Together, we work
          collaboratively to exceed your expectations and help your business
          thrive.
        </p>
      </div>
      {/* team members */}
      <div className="grid grid-cols-4 gap-6 my-20 ">
        {teamArr.map((data) => (
          <TeamMemberCard data={data} key={Math.random.toString()} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
