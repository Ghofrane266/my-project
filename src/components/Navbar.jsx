import logo1 from "../images/logo1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
function Navbar() {
  return (
    <div className="flex  space-x-8 justify-between" >
      <div>
        <img
          src={logo1}
          alt="logo"
          loading="lazy"
          width={180}
          height={80}
          className="-my-11"
        />
      </div>
      <div
        className="flex space-x-6  mt-5 font-semibold  "
        style={{ listStyle: "none",cursor:"pointer", }}
      >
        <a href =" " className="active:text-[#4aa125] hover:text-[#4aa125]" >Home</a>
        <a href =" " className="active:text-[#4aa125] hover:text-[#4aa125]">About</a>
        <a href =" " className="active:text-[#4aa125] hover:text-[#4aa125]">Menu</a>
        <a href =" " className="active:text-[#4aa125] hover:text-[#4aa125]">Profile</a>
      </div>

      <div className="flex space-x-6 mt-6 px-6">
        <FiSearch size={20}  className="active:text-[#4aa125] hover:text-[#4aa125]"/>
        <AiOutlineShoppingCart size={20}  className="active:text-[#4aa125] hover:text-[#4aa125]"/>
        <button className="flex justify-center bg-[#4aa125] text-white w-[80px] h-[30px] rounded-2xl -mt-1 hover:bg-white hover:text-[#4aa125] active:bg-white active:text-[#4aa125]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
