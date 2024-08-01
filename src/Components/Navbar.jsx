import logo  from "../../src/assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {

  
  return (
    
    <header>
    <nav>
      <input
        defaultValue=""
        id="check"
        name=""
        type="checkbox"
      />
      <label
        htmlFor="check"
        id="checkbtn"
      >
        <FaBars className="fonts"/>
      </label>
      <label className="logo">
        Restaura
      </label>
      <ul>
        <li>
          <a
            href={"#dishes"}>
            Dishes
          </a>
        </li>
        <li>
        <a href={"#about"} className="mr-5 hover:text-white">
        About
      </a>
      </li>
        <li>
          <a href="#mission">
            Mission
          </a>
        </li>
        <li>
          <a href="#expertise">
            Expertise
          </a>
        </li>
        <li>
          <a href="#review">
            Review
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
        <label
        htmlFor="check"
        id="checkbtn"
      >
        <GiTireIronCross className="fonts2"/>
      </label>
      </ul>
    </nav>
  </header>)
}

export default Navbar