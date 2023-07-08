const SolutionCarouselCard = ({ item }) => {
  const { title, img } = item || {};
  return (
    <div className="card w-4/5 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-center">
          <button className="btn btn-primary">See Services</button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarouselCard;
