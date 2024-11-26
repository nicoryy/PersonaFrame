import { WindSong, Raleway } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const windSong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <section>
      <div className="flex justify-between py-5 px-10 mb-20">
        <p className={`text-3xl font-medium ${windSong.className}`}>
          Pedro <span className="gradient">Nicory</span>
        </p>

        <button className="btn btn-sm">Moon</button>
      </div>

      <section className="mx-20 flex gap-5">
        {/* conteiner 1 */}
        <div className="bg-[#ffffff] min-w-96 text-center p-2 rounded-lg grid grid-cols-1 gap-2">
          {/* IMAGEM */}
          <span className="bg-primary w-40 h-40 block mx-auto rounded-lg -mt-20 mb-10"></span>

          <h1 className={`font-semibold text-2xl ${raleway.className}`}>
            Pedro Nicory
          </h1>
          <h2 className="text-sm text-gray-400 ">FullStack Developer</h2>

          <section className="flex gap-2 justify-center">
            <a href='/' className="btn btn-md"><FaLinkedin size={20}/></a>
            <a href='/' className="btn btn-md"><FaGithub size={20}/></a>
            <a href='/' className="btn btn-md"><FaInstagram size={20}/></a>
            <a href='/' className="btn btn-md"><FaXTwitter size={20}/></a>
          </section>

          <section className="">

          </section>

        </div>

        {/* conteiner 2 */}
        <div className="bg-[#ffffff] w-full text-center p-2 rounded-lg">
          <p>About me</p>
        </div>
      </section>
    </section>
  );
}
