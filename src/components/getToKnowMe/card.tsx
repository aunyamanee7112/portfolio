import React from "react";

export type TMyworkCard = {
  desp: string;
  project_name: string;
  logo: string;
  url: string;
};

const MyWorkCard = ({ card }: { card: TMyworkCard[] }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3">
      {card.map((item , index) => (
        <div key={index} className=" cursor-pointer inline-flex flex-col justify-center gap-3 text-left p-5 w-full h-full xl:w-[250px] xl:h-[300px] rounded-xl border border-gray-300 ">
          <img
            className="cursor-pointer"
            src={`/src/assets/${item.logo}`}
            width={40}
            height={40}
          />
          <div>{item.project_name}</div>
          <div className="lowercase h-[120px]">{item.desp}</div>
          <button
            disabled={index === 2 ? true : false}
            className="disabled:bg-gray-200 disabled:text-gray-100 hover:bg-black hover:text-white hover:border-none"
            onClick={() => {
              window.open(item.url);
            }}
          >
            See More
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyWorkCard;
