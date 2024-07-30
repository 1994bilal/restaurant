import logo  from "../../src/assets/logo.png";

const Navbar = () => {
  return (
    <div className='top-1 z-50 flex w-full flex-col items-center justify-center'>
        <header className="mt-4 text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img src={logo} alt="restaura" className="h-[20px] w-[110px]"/>
      <span className="ml-3 text-xl">
         
      </span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-yellow-300 justify-center">
      <a className="mr-5 hover:text-white">
        Dishes
      </a>
      <a className="mr-5 hover:text-white">
        About
      </a>
      <a className="mr-5 hover:text-white">
        Mission
      </a>
      <a className="mr-5 hover:text-white">
       Expertise
      </a>
      <a className="mr-5 hover:text-white">
       Review
      </a>
      <a className="mr-5 hover:text-white">
       Contact
      </a>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar