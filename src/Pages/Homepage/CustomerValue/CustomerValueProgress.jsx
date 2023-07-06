import RadialProgress from "../../Company/RadialProgress";

const CustomerValueProgress = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <RadialProgress />
      <h4 className="text-2xl text-center mt-5">Discovery</h4>
      <p className="text-center text-gray-500">CTR Improvement</p>
    </div>
  );
};

export default CustomerValueProgress;
