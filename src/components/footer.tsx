
import Header from "./common/header";
import github from '../assets/github.png' 
import linkedin from '../assets/linkedin.png' 
import me from '../assets/me3.jpeg' 

const Footer = () => {
  return (
    <div id="contact" className="flex text-left items-center justify-between lg:px-[150px] border border-gray-300 px-6 py-4 relative">
      <div className="inline-flex flex-col">
        <Header title={"Get In Touch"} />
        <h2>Let's talk about everything!</h2>
        <p className="text-sm lg:text-base">
          Follow me in social media , github or Send me an with email following
          below. 👋
          <br />
          srilerdaun@gmail.com
        </p>
        <div className="flex gap-3 pt-5 lg:pt-10">
          <img
            className="cursor-pointer lg:w-[60px] lg:h-[60px] w-10 h-10"
            src={github}
            onClick={()=> {window.open("https://github.com/aunyamanee7112")}}
          />
          <img
            className="cursor-pointer lg:w-[60px] lg:h-[60px] w-10 h-10"
            src={linkedin}
            onClick={()=> {window.open("https://www.linkedin.com/in/aunyamanee-srilerd-695032176/")}}
          />
        </div>
      </div>
      <div className=" lg:w-[400px] lg:h-[400px] my-auto">
        <img className="mx-auto" src={me} />
      </div>
    </div>
  );
};

export default Footer;
