
import Header from "./common/header";

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
            src="../assets/github.png"
          />
          <img
            className="cursor-pointer lg:w-[60px] lg:h-[60px] w-10 h-10"
            src="../assets/linkedin.png"
          />
        </div>
      </div>
      <div className=" lg:w-[400px] lg:h-[400px] my-auto">
        <img className="mx-auto" src={`assets/me3.jpeg`} />
      </div>
    </div>
  );
};

export default Footer;
