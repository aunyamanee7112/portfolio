
import { EXPERIENCE_DESP } from "../../constants/profile";
import { WORK_EXPERIENCE } from "../../constants/experience";
import Card from "./card";
import Header from "../common/header";

const MyExperience = () => {
  return (
    <div id="experience" className="h-full xl:px-[150px] xl:pt-[70px] text-left">
      <div className="w-[200px] h-[200px] mr-auto">
          <img className="mt-3" src={`/src/assets/me.jpeg`} />
      </div>
      <Header title="My Experience" />
      <p className="line-clamp-4 lg:w-2/3">{EXPERIENCE_DESP}</p>
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5 w-full py-10">
        {WORK_EXPERIENCE.map((work) => (
          <Card
            url={work.url}
            company={work.company}
            duration={work.duration}
            position={work.position}
          />
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
