import RadialProgress from "../../Company/RadialProgress";

const CustomerValueProgress = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <RadialProgress val={data.val} />
      <h4 className="text-2xl text-center mt-5">{data.name}</h4>
    </div>
  );
};

export default CustomerValueProgress;
