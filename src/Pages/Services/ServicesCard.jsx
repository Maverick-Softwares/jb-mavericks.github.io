import webApp from "../../assets/services/web.gif";
const ServicesCard = ({ data }) => {
  const { title, img, description } = data || {};
  return (
    <div className="card w-4/5 p-8 bg-base-100 shadow-xl h-full">
      <img className="w-5/6 mx-auto" src={img} alt="Shoes" />
      <div className="card-body pt-0">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
