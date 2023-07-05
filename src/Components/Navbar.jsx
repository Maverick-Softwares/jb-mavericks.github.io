import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  const navList = (
    <>
      <Link className="btn btn-ghost">Home</Link>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">
          Product <BsChevronDown />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <Link className="">Solutions</Link>
          </li>
          <li>
            <Link className="">Use Cases</Link>
          </li>
          <li>
            <Link className="">Developers</Link>
          </li>
        </ul>
      </div>
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
            <Link className="">Corporate Profile</Link>
          </li>
          <li>
            <Link className="">Our Mission</Link>
          </li>
          <li>
            <Link className="">Our Team</Link>
          </li>
          <li>
            <Link className="">Career</Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className="navbar bg-white rounded-box px-6 sticky top-0 z-10 shadow-lg">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">JB</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">{navList}</div>
      </div>
    </div>
  );
};

export default Navbar;
