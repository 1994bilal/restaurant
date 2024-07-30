import logo  from "../../src/assets/logo.png";

const Navbar = () => {
  return (
    <div className=' fixed top-1 z-50 flex w-full flex-col items-start justify-start'>
        <header className="mt-4 text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img src={logo} alt="restaura" className="h-[20px] w-[110px]"/>
      <span className="ml-3 text-xl">
         
      </span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-grey-100 justify-center">
      <a href={"#dishes"} className="mr-5 hover:text-white">
        Dishes
      </a>
      <a href={"#about"} className="mr-5 hover:text-white">
        About
      </a>
      <a href={"#mission"} className="mr-5 hover:text-white">
        Mission
      </a>
      <a href={"#expertise"} className="mr-5 hover:text-white">
       Expertise
      </a>
      <a href={"#review"} className="mr-5 hover:text-white">
       Review
      </a>
      <a href={"#contact"} className="mr-5 hover:text-white">
       Contact
      </a>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar