import me from "../../assets/me.jpeg"
const Navbar = () => {
  return (
    <div className="w-full flex bg-white fixed p-2 capitalize mx-auto justify-between items-center px-32 invisible lg:visible">
      <a href="#aboutMe" className="text-black">
        about me
      </a>
      <a href="#experience" className="text-black">Experience</a>
      <a href="#workings" className="text-black">workings</a>
      <img className="" src={me} width={70} height={70} />
      <a href="#cert" className="text-black">Licenses & Cert</a>
      <a href="#buildup" className="text-black">build-up</a>
      <a href="#contact" className="text-black">contact</a>
    </div>
  );
};

export default Navbar;
