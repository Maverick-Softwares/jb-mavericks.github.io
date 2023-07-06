import CustomerValueProgress from "./CustomerValueProgress";

const CustomerValue = () => {
  return (
    <div className="my-12">
      <h2 className="text-4xl mb-8 font-semibold text-center">
        Customer Values
      </h2>
      <div className="grid grid-cols-3 gap-7">
        <CustomerValueProgress />
        <CustomerValueProgress />
        <CustomerValueProgress />
      </div>
    </div>
  );
};

export default CustomerValue;
