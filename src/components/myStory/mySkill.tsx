import icon_webdev from "../../assets/icon/webdev.png"
import icon_e2e from "../../assets/icon/e2e.png"
import icon_unitTest from "../../assets/icon/unitTest.png"
import icon_react from "../../assets/icon/react.png"
import icon_typescript from "../../assets/icon/typescript.png"
import icon_tailwind from "../../assets/icon/tailwind.svg"
import icon_cypress from "../../assets/icon/cypress.jpeg"
import icon_sql from "../../assets/icon/sql.png"
const skills = [
  { name: "web development", icon: icon_webdev },
  { name: "E2E Test", icon: icon_e2e},
  { name: "Unit Test", icon: icon_unitTest },
  { name: "React", icon: icon_react },
  { name: "TypeScript", icon: icon_typescript },
  { name: "Tailwind", icon: icon_tailwind },
  { name: "Cypress", icon: icon_cypress },
  { name: "SQL", icon: icon_sql },
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
                src={item.icon}
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
