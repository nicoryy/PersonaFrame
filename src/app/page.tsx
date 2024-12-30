"use client";

// Components
import Conteiner from "@/components/layout/Conteiner";
import IconTitle from "@/components/layout/IconTitle";
import Title from "@/components/layout/Title";

// Atoms
import { homeAtom } from "@/components/constans";
import { useAtom } from "jotai";

// Icons
import { FaUserFriends } from "react-icons/fa";
import { FaLaptopCode, FaMobile, FaPaintbrush } from "react-icons/fa6";

export default function Home() {
  const [homePage] = useAtom(homeAtom);

  return (
    <Conteiner>
      <Title title="About me" />
      <p className="text-sm">{homePage.aboutme}</p>

      <p className="text-2xl">What i do!</p>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-primary text-white dark:text-neutral-content rounded-lg p-5">
          <IconTitle
            title={homePage.whatido.section1.title}
            icon={<FaLaptopCode size={20} />}
          />
          <p className="text-sm text-justify">
            {homePage.whatido.section1.description}
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <IconTitle
            title={homePage.whatido.section2.title}
            icon={<FaMobile size={20} />}
          />
          <p className="text-sm text-justify">
            {homePage.whatido.section2.description}
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <IconTitle
            title={homePage.whatido.section3.title}
            icon={<FaPaintbrush size={20} />}
          />
          <p className="text-sm text-justify">
            {homePage.whatido.section3.description}
          </p>
        </div>

        <div className="bg-primary text-white dark:text-neutral-content rounded-lg p-5">
          <IconTitle
            title={homePage.whatido.section4.title}
            icon={<FaUserFriends size={20} />}
          />
          <p className="text-sm text-justify">
            {homePage.whatido.section4.description}
          </p>
        </div>
      </section>
    </Conteiner>
  );
}
