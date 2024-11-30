import Conteiner from "@/components/layout/Conteiner";
import IconTitle from "@/components/layout/IconTitle";
import Title from "@/components/layout/Title";
import { FaUserFriends } from "react-icons/fa";
import { FaLaptopCode, FaMobile, FaPaintbrush } from "react-icons/fa6";

export default function Home() {
  return (
    <Conteiner>
      <Title title="About me" />
      <p className="text-sm">
        Hello there! I&lsquo;m thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>

      <p className="text-2xl">What i do!</p>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-primary text-white dark:text-neutral-content rounded-lg p-5">
          <IconTitle title="Development" icon={<FaLaptopCode size={20} />} />
          <p className="text-sm text-justify">
            As a developer, I find myself most captivated by the power and
            flexibility of NEXT.js. I&lsquo;m always eager to dive into new projects
            that leverage NEXT.js and discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <IconTitle title="Mobile" icon={<FaMobile size={20} />} />
          <p className="text-sm text-justify">
            With a focus on user-centric design and cutting-edge technologies, I
            thrive on building intuitive and efficient apps that make a positive
            impact on people&lsquo;s lives. Let&lsquo;s turn ideas into reality and shape
            the future together.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <IconTitle title="Design" icon={<FaPaintbrush size={20} />} />
          <p className="text-sm text-justify">
            Crafting visually appealing and intuitive user interfaces that offer
            a delightful user experience is something I&lsquo;m truly fanatic about.
          </p>
        </div>

        <div className="bg-primary text-white dark:text-neutral-content rounded-lg p-5">
          <IconTitle title="Mentorship" icon={<FaUserFriends size={20} />} />
          <p className="text-sm text-justify">
            I have also found great joy in sharing my knowledge with others.
            Being a technical mentor allows me to give back to the community
            that has supported me throughout my career.
          </p>
        </div>
      </section>
    </Conteiner>
  );
}
