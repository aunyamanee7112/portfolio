import Education from "./education";
import Internship from "./internShip";
import MySkill from "./mySkill";
import AboutMe from "./aboutMe";
import Header from "../common/header";

const MyStory = () => {
  return (
    <div id="aboutMe" className="text-center w-full py-10 lg:p-[150px] h-3/4">
      <Header title="get to know me !" />
      <div className="grid grid-cols-1 lg:grid-cols-3 text-left gap-10 justify-items-center">
        <div className="col-span-1">
          <div className="w-[300px] h-[400px] bg-white shadow-xl p-5 rounded-xl">
            <div className="w-full h-[250px] bg-[url(/src/assets/profile1.jpeg)] bg-cover bg-center rounded-xl" />
            <div className="pt-5 text-gray-500">
              <div className="inline-flex gap-2">
                <img className="w-4 h-4" src={`/src/assets/icon/user.png`} />
                <small>Aunyamanee Srilerd | she/her</small>
              </div>
              <br />
              <div className="inline-flex gap-2">
                <img className="w-4 h-4" src={`/src/assets/icon/group.png`} />
                <small>pathumtanian</small>
              </div>
              <br />
              <div className="inline-flex gap-2">
                <img
                  className="w-4 h-4"
                  src={`/src/assets/icon/location.png`}
                />
                <small>Thanyaburi Pathum thani</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <AboutMe />
          <Education />
          <Internship />
          <MySkill />
        </div>
      </div>
    </div>
  );
};

export default MyStory;
