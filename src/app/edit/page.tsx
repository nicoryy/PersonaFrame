"use client";

import Conteiner from "@/components/layout/Conteiner";
import Title from "@/components/layout/Title";
import { useState } from "react";
import { useAtom } from "jotai";
import {
  profileAtom,
  homeAtom,
  //   projectsAtom,
  resumeAtom,
} from "@/components/constans";

const EditPage = () => {
  const [home, setHome] = useAtom(homeAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [resume] = useAtom(resumeAtom); //setResume
  //   const [projects, setProjects] = useAtom(projectsAtom);

  const [isSelected, setIsSelected] = useState("home");

  const handleClick = (section: string) => {
    setIsSelected(section);
  };

  return (
    <Conteiner>
      <Title title="Edit Page" />

      <p className="text-center text-sm">
        Please, select the section you want to edit.
      </p>

      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full mb-5">
        <button
          className={
            isSelected === "home" ? "btn w-full lg:w-auto bg-primary text-white" : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("home")}
        >
          Home
        </button>
        <button
          className={
            isSelected === "profile" ? "btn w-full lg:w-auto bg-primary text-white" : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("profile")}
        >
          Profile
        </button>
        <button
          className={
            isSelected === "resume" ? "btn w-full lg:w-auto bg-primary text-white" : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("resume")}
        >
          Resume
        </button>
        <button
          className={
            isSelected === "work" ? "btn w-full lg:w-auto bg-primary text-white" : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("work")}
        >
          Work
        </button>
      </div>

      <div className="relative w-full">
        <div
          className={`${
            isSelected === "home"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          } transition-all duration-500 absolute inset-0`}
        >
          {isSelected === "home" && (
            <section className="flex flex-col gap-5">
              <div>
                <Title title="About Me" />
                <label htmlFor="aboutme" className="label">
                  About Me
                </label>
                <textarea
                  id="aboutme"
                  className="textarea textarea-primary w-full"
                  value={home.aboutme}
                  onChange={(e) =>
                    setHome({ ...home, aboutme: e.target.value })
                  }
                ></textarea>
              </div>

              <Title title="What I Do" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-2">
                {Object.entries(home.whatido).map(([key, value]) => (
                  <div key={key} className="bg-base-300 p-5 rounded">
                    <p className="text-lg text-center">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                    <div>
                      <label htmlFor={`${key}title`} className="label">
                        Title:
                      </label>
                      <input
                        type="text"
                        name={`${key}title`}
                        id={`${key}title`}
                        className="input input-primary w-full"
                        value={value.title}
                        onChange={(e) => {
                          const newHome = { ...home };
                          newHome.whatido[
                            key as keyof typeof home.whatido
                          ].title = e.target.value;
                          setHome(newHome);
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor={`${key}description`} className="label">
                        Description:
                      </label>
                      <textarea
                        id={`${key}description`}
                        className="textarea textarea-primary w-full"
                        value={value.description}
                        onChange={(e) => {
                          const newHome = { ...home };
                          newHome.whatido[
                            key as keyof typeof home.whatido
                          ].description = e.target.value;
                          setHome(newHome);
                        }}
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div
          className={`${
            isSelected === "profile"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          } transition-all duration-500 absolute inset-0`}
        >
          {isSelected === "profile" && (
            <div className="flex flex-col gap-5 pb-5">
              <div className="bg-base-200 rounded p-5">
                <Title title="Profile" />

                <label htmlFor="profileImage" className="label">
                  Profile Image
                </label>
                <input
                  type="text"
                  id="profileImage"
                  className="input input-primary w-full"
                  value={profile.image}
                  onChange={(e) =>
                    setProfile({ ...profile, image: e.target.value })
                  }
                />

                <label htmlFor="profileFirstname" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  id="profileFirstname"
                  className="input input-primary w-full"
                  value={profile.firstname}
                  onChange={(e) =>
                    setProfile({ ...profile, firstname: e.target.value })
                  }
                />

                <label htmlFor="profileLastname" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="profileLastname"
                  className="input input-primary w-full"
                  value={profile.lastname}
                  onChange={(e) =>
                    setProfile({ ...profile, lastname: e.target.value })
                  }
                />

                <label htmlFor="profileRole" className="label">
                  Role
                </label>
                <input
                  type="text"
                  id="profileRole"
                  className="input input-primary w-full"
                  value={profile.role}
                  onChange={(e) =>
                    setProfile({ ...profile, role: e.target.value })
                  }
                />

                <label htmlFor="profileLinkedin" className="label">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="profileLinkedin"
                  className="input input-primary w-full"
                  value={profile.linkedin}
                  onChange={(e) =>
                    setProfile({ ...profile, linkedin: e.target.value })
                  }
                />

                <label htmlFor="profileGithub" className="label">
                  GitHub
                </label>
                <input
                  type="text"
                  id="profileGithub"
                  className="input input-primary w-full"
                  value={profile.github}
                  onChange={(e) =>
                    setProfile({ ...profile, github: e.target.value })
                  }
                />

                <label htmlFor="profileInstagram" className="label">
                  Instagram
                </label>
                <input
                  type="text"
                  id="profileInstagram"
                  className="input input-primary w-full"
                  value={profile.instagram}
                  onChange={(e) =>
                    setProfile({ ...profile, instagram: e.target.value })
                  }
                />

                <label htmlFor="profileX" className="label">
                  X
                </label>
                <input
                  type="text"
                  id="profileX"
                  className="input input-primary w-full"
                  value={profile.x}
                  onChange={(e) =>
                    setProfile({ ...profile, x: e.target.value })
                  }
                />

                <label htmlFor="profilePhone" className="label">
                  Phone
                </label>
                <input
                  type="text"
                  id="profilePhone"
                  className="input input-primary w-full"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />

                <label htmlFor="profileEmail" className="label">
                  Email
                </label>
                <input
                  type="text"
                  id="profileEmail"
                  className="input input-primary w-full"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />

                <label htmlFor="profileLocation" className="label">
                  Location
                </label>
                <input
                  type="text"
                  id="profileLocation"
                  className="input input-primary w-full"
                  value={profile.location}
                  onChange={(e) =>
                    setProfile({ ...profile, location: e.target.value })
                  }
                />

                <label htmlFor="profileResume" className="label">
                  Resume
                </label>
                <input
                  type="text"
                  id="profileResume"
                  className="input input-primary w-full"
                  value={profile.resume}
                  onChange={(e) =>
                    setProfile({ ...profile, resume: e.target.value })
                  }
                />
              </div>
            </div>
          )}
        </div>

        <div
          className={`${
            isSelected === "resume"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          } transition-all duration-500 absolute inset-0`}
        >
          {isSelected === "resume" && (
            <section className="bg-base-300 p-5 rounded-lg flex flex-col gap-5">
              <Title title="Resume" />

              <div>
                <p className="text-center">Educations</p>

                {resume.educations.map((education, index) => (
                  <div key={index}>{/* CONTINUAR DAQUI */}</div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Conteiner>
  );
};

export default EditPage;
