"use client";

// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import ThemeController from "@/components/ThemeController";
import { WindSong, Raleway } from "next/font/google";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaBriefcase,
  FaDownload,
  FaEnvelope,
  FaFile,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { ThemeProvider } from "@/components/providers/ThemeProviders";
import Link from "next/link";
import IconTitle from "@/components/layout/IconTitle";
import { profileAtom } from "@/components/constans";
import { useAtom } from "jotai";
import Image from "next/image";
import { RiPencilFill } from "react-icons/ri";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const windSong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [profile] = useAtom(profileAtom);
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`p-4 bg-primary flex justify-center items-center h-dvh ${poppins.className}`}
        >
          {" "}
          <section className="rounded-lg bg-base-200 h-[calc(100dvh-2rem)] w-full overflow-y-scroll pb-5">
            {/* <AlertCompo /> */}
            <div className="flex justify-between py-5 px-10 mb-20">
              <p className={`text-3xl font-medium ${windSong.className}`}>
                {profile.firstname}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  {profile.lastname}
                </span>
              </p>

              <div className="flex gap-5">
                <Link href="/edit">
                  <RiPencilFill size={40} />
                </Link>
                <ThemeController />
              </div>
            </div>

            <section className="mx-5 lg:mx-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5">
              {/* conteiner 1 */}
              <div className="bg-base-100 lg:min-w-96 text-center p-5 rounded-lg grid grid-cols-1 gap-5">
                {/* IMAGEM */}
                <Image
                  priority
                  alt="profile"
                  width={160}
                  height={160}
                  src={profile.image}
                  className="object-cover block mx-auto rounded-lg -mt-20"
                />

                <h1 className={`font-semibold text-2xl ${raleway.className}`}>
                  {profile.firstname} {profile.lastname}
                </h1>
                <h2 className="text-sm text-gray-400 ">FullStack Developer</h2>

                <section className="flex gap-2 justify-center">
                  <Link
                    target="_blank"
                    href={profile.linkedin}
                    className="btn btn-md"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                  <Link
                    target="_blank"
                    href={profile.github}
                    className="btn btn-md"
                  >
                    <FaGithub size={20} />
                  </Link>
                  <Link
                    target="_blank"
                    href={profile.instagram}
                    className="btn btn-md"
                  >
                    <FaInstagram size={20} />
                  </Link>
                  <Link target="_blank" href={profile.x} className="btn btn-md">
                    <FaXTwitter size={20} />
                  </Link>
                </section>

                <section className="bg-base-200 rounded-lg p-12">
                  <div className="flex items-center text-left gap-5 w-full">
                    <IconTitle title="" icon={<FaPhone size={20} />} />
                    <div className="text-sm">
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-400">{profile.phone}</p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex items-center text-left gap-5 w-full">
                    <IconTitle title="" icon={<FaEnvelope size={20} />} />
                    <div className="text-sm">
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400 break-words text-xs lg:text-sm">
                        {profile.email}
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex items-center text-left gap-5 w-full">
                    <IconTitle title="" icon={<FaMapMarkerAlt size={20} />} />
                    <div className="text-sm">
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-400">{profile.location}</p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <button
                    className="btn w-full bg-gradient-to-r from-primary to-secondary text-xs lg:text-base
                   text-white rounded-xl flex items-center gap-2 p-3"
                  >
                    <FaDownload size={15} />
                    <a href={profile.resume} target="_blank">
                      Download Resume
                    </a>
                  </button>
                </section>
              </div>

              {/* conteiner 2 */}
              <div
                id="page-container"
                className="bg-base-100 relative min-h-screen lg:min-h-96 text-center p-2 rounded-lg mt-20 lg:mt-0"
              >
                {/* Div Absoluta - Não será cortada */}
                <div className="bg-base-100 absolute lg:right-0 right-1/2 translate-x-1/2 lg:translate-x-0 -top-20 flex gap-5 items-center justify-center p-2 rounded-lg z-10">
                  <Link
                    href="/#page"
                    className="btn btn-md flex flex-col items-center gap-2"
                  >
                    <FaHouse size={15} />
                    <span className="hidden lg:block">Home</span>
                  </Link>
                  <Link
                    href="/resume#page"
                    className="btn btn-md flex flex-col items-center gap-2"
                  >
                    <FaFile size={15} />
                    <span className="hidden lg:block">Resume</span>
                  </Link>
                  <Link
                    href="/work#page"
                    className="btn btn-md flex flex-col items-center gap-2"
                  >
                    <FaBriefcase size={15} />
                    <span className="hidden lg:block">Work</span>
                  </Link>
                  <Link
                    href="/contact#page"
                    className="btn btn-md flex flex-col items-center gap-2"
                  >
                    <FaEnvelope size={15} />
                    <span className="hidden lg:block">Contact</span>
                  </Link>
                </div>

                {/* Conteúdo que será rolável */}
                <div
                  id="page"
                  className="overflow-y-scroll h-full p-0 lg:p-4"
                >
                  {children}
                </div>
              </div>
            </section>
          </section>
        </body>
      </html>
    </ThemeProvider>
  );
}
