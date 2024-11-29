import { FaUserFriends } from "react-icons/fa";
import { FaLaptopCode, FaMobile, FaPaintbrush } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="lg:mx-10 mx-5 py-2 text-left grid gap-5">
      <div className="flex gap-5 w-full items-center justify-start">
        <p className="uppercase text-nowrap text-3xl">about me</p>
        <span className="bg-gradient-to-r from-primary to-secondary w-full lg:w-96 block h-0.5" />
      </div>

      <p className="text-sm">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>

      <p className="text-2xl">What i do!</p>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-primary text-white dark:text-neutral-content rounded-lg p-5">
          <span className="flex items-center gap-2">
            <FaLaptopCode size={20} />
            <p className="font-semibold text-lg">Web Development</p>
          </span>
          <p className="text-sm text-justify">
            As a developer, I find myself most captivated by the power and
            flexibility of NEXT.js. I'm always eager to dive into new projects
            that leverage NEXT.js and discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <span className="flex items-center gap-2">
            <FaMobile size={20} />
            <p className="font-semibold text-lg">App Development</p>
          </span>
          <p className="text-sm text-justify">
            With a focus on user-centric design and cutting-edge technologies, I
            thrive on building intuitive and efficient apps that make a positive
            impact on people's lives. Let's turn ideas into reality and shape
            the future together.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-5">
          <span className="flex items-center gap-2">
            <FaPaintbrush size={20} />
            <p className="font-semibold text-lg">UI/UX Designing</p>
          </span>
          <p className="text-sm text-justify">
            Crafting visually appealing and intuitive user interfaces that offer
            a delightful user experience is something I'm truly fanatic about.
          </p>
        </div>

        <div className="bg-primary text-white dark:text-neutral-content rounded-lg p-5">
          <span className="flex items-center gap-2">
            <FaUserFriends size={20} />
            <p className="font-semibold text-lg">Mentorship</p>
          </span>
          <p className="text-sm text-justify">
            I have also found great joy in sharing my knowledge with others.
            Being a technical mentor allows me to give back to the community
            that has supported me throughout my career.
          </p>
        </div>
      </section>
    </section>
  );
}
