import React from "react";

const skills = [
  { name: "web development", icon: "webdev.png" },
  { name: "E2E Test", icon: "e2e.png" },
  { name: "Unit Test", icon: "unitTest.png" },
  { name: "React", icon: "react.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "Tailwind", icon: "tailwind.svg" },
  { name: "Cypress", icon: "cypress.jpeg" },
  { name: "SQL", icon: "sql.png" },
];

const MySkill = () => {
  return (
    <div className="pt-2">
      <b>What can i did 👇</b>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 pt-3 justify-self-start w-fit">
        {skills.map((item) => (
          <div className="grid grid-rows-2  mx-auto w-full lg:w-[140px] h-[150px] p-5 border border-gray-300 rounded-md cursor-pointer">
            <div
              className={`pb-5 rounded-full border border-gray-300 m-auto w-[55px] h-[55px]`}
            >
              <img
                className="mx-auto mt-3"
                src={`/src/assets/icon/${item.icon}`}
                width={30}
                height={30}
              />
            </div>
            <div className="text-center truncate text-wrap pt-2">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkill;
