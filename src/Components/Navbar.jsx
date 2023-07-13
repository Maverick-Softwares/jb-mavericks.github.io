import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  const navList = (
    <>
      <Link to="/" className="btn btn-ghost">
        Home
      </Link>
      <Link to="/services" className="btn btn-ghost">
        Services
      </Link>
      {/* <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">
          Services <BsChevronDown />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <Link className="">Desktop App</Link>
          </li>
          <li>
            <Link className="">Mobile App</Link>
          </li>
          <li>
            <Link className="">Web App</Link>
          </li>
          <li>
            <Link className="">Server Maintainance</Link>
          </li>
        </ul>
      </div> */}
      <div className="dropdown dropdown-end">
        <label tabIndex={1} className="btn btn-ghost rounded-btn">
          Company
          <BsChevronDown />
        </label>
        <ul
          tabIndex={1}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <Link to="/team" className="">
              Our Team
            </Link>
          </li>
          <li>
            <Link className="">Career</Link>
          </li>
        </ul>
      </div>
      <Link to="/about" className="btn btn-ghost">
        About
      </Link>
      <Link to="/contact" className="btn btn-ghost">
        Contact Us
      </Link>
    </>
  );
  return (
    <div className="navbar bg-white rounded-box px-6 sticky top-0 z-10 shadow-lg">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-2xl font-bold">Maverick Softwares</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">{navList}</div>
      </div>
    </div>
  );
};

export default Navbar;
