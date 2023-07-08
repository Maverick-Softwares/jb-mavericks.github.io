import { BsGithub, BsLinkedin } from "react-icons/bs";
const TeamMemberCard = ({ data }) => {
  const { name, linkedIn, github, designation, profile } = data || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img className="mask mask-hexagon" src={profile} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-500">{designation}</p>
        <div className="flex mt-6">
          <a href={github}>
            <BsGithub size={25} className="text-gray-700 mx-5" />
          </a>
          <a href={linkedIn}>
            <BsLinkedin size={25} className="text-gray-700 mx-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
