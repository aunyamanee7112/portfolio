import { PROJECT_LIST } from "../../constants/project";

const MyProject = () => {
  return (
    <div id="workings">
      <div className="grid grid-cols-7 grid-rows-2 w-full gap-5 gap-y-14">
        <div className="col-span-4 flex flex-col w-full cursor-pointer">
          <img src={PROJECT_LIST[0].img} className="object-cover h-full pb-10" />
          <p>{PROJECT_LIST[0].name}</p>
         <p>{PROJECT_LIST[0].provider}</p> 
        </div>
        <div className="col-span-3 w-full flex flex-col cursor-pointer">
          <img src={PROJECT_LIST[1].img} className="object-cover h-full pb-10" />
         <p>{PROJECT_LIST[1].name}</p> 
         <p> {PROJECT_LIST[1].provider}</p>
        </div>
        <div className="col-span-2 w-full flex flex-col cursor-pointer">
          <img src={PROJECT_LIST[2].img} className="object-cover h-full pb-10" />
          <p>{PROJECT_LIST[2].name}</p>
          <p>{PROJECT_LIST[2].provider}</p>
        </div>
        <div className="col-span-3 w-full flex flex-col cursor-pointer">
          <img src={PROJECT_LIST[3].img} className="object-cover h-full pb-10" />
          <p>{PROJECT_LIST[3].name}</p>
          <p>{PROJECT_LIST[3].provider}</p>
        </div>
        <div className="col-span-2 w-full flex flex-col cursor-pointer">
          <img src={PROJECT_LIST[4].img} className="object-cover h-full pb-10" />
          <p>{PROJECT_LIST[4].name}</p>
          <p>{PROJECT_LIST[4].provider}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
