import CustomerValueProgress from "./CustomerValueProgress";

const CustomerValue = () => {
  const customerValArr = [
    { name: "Product/Service Quality", val: "45%" },
    { name: "Price/Value Ratio", val: "30%" },
    { name: "Customer Experience", val: "25%" },
  ];
  return (
    <div className="my-32">
      <h2 className="text-4xl mb-8 font-semibold text-center">
        Customer Values
      </h2>
      <div className="grid grid-cols-3 gap-7">
        {customerValArr.map((data) => (
          <CustomerValueProgress data={data} />
        ))}
        {/* <CustomerValueProgress />
        <CustomerValueProgress /> */}
      </div>
    </div>
  );
};

export default CustomerValue;
