import logo1 from "../images/logo1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMe } from "../store/auth";
import { useEffect } from "react";
function Navbar() {
  const user = useSelector((store) => store.auth.me);
   const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) dispatch(getMe());
  }, [dispatch]);


const navigate = useNavigate()

const goToMenu=()=>{
  if (user) {
    navigate("/menu")
  }
  else{
    navigate("/login")
  }
}

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
        <Link to="/home" className="active:text-[#4aa125] hover:text-[#4aa125]" >Home</Link>
        <Link to="/about" className="active:text-[#4aa125] hover:text-[#4aa125]">About</Link>
        <a onClick={goToMenu}   className="active:text-[#4aa125] hover:text-[#4aa125]">Menu</a>
        <Link to="/profil" className="active:text-[#4aa125] hover:text-[#4aa125]">Profil</Link>
      </div>

      <div className="flex space-x-6 mt-6 px-6">
        <FiSearch size={20}  className="active:text-[#4aa125] hover:text-[#4aa125]"/>
        <AiOutlineShoppingCart size={20}  className="active:text-[#4aa125] hover:text-[#4aa125]"/>
        <button onClick={()=>navigate("/login")}  className="flex justify-center bg-[#4aa125] text-white w-[80px] h-[30px] rounded-2xl -mt-1 hover:bg-white hover:text-[#4aa125] active:bg-white active:text-[#4aa125]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
