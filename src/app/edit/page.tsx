"use client";

import Conteiner from "@/components/layout/Conteiner";
import Title from "@/components/layout/Title";
import { useState } from "react";
import { useAtom } from "jotai";
import {
  profileAtom,
  homeAtom,
  projectsAtom,
  resumeAtom,
} from "@/components/constans";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

const EditPage = () => {
  const [home, setHome] = useAtom(homeAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [resume, setResume] = useAtom(resumeAtom); //setResume
  const [projects, setProjects] = useAtom(projectsAtom);

  const [isEditingProject, setIsEditingProject] = useState<{
    title: string;
    type: string;
    image: string;
    github: string;
  } | null>(null);

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
            isSelected === "home"
              ? "btn w-full lg:w-auto bg-primary text-white"
              : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("home")}
        >
          Home
        </button>
        <button
          className={
            isSelected === "profile"
              ? "btn w-full lg:w-auto bg-primary text-white"
              : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("profile")}
        >
          Profile
        </button>
        <button
          className={
            isSelected === "resume"
              ? "btn w-full lg:w-auto bg-primary text-white"
              : "btn w-full lg:w-auto"
          }
          onClick={() => handleClick("resume")}
        >
          Resume
        </button>
        <button
          className={
            isSelected === "work"
              ? "btn w-full lg:w-auto bg-primary text-white"
              : "btn w-full lg:w-auto"
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
                <textarea
                  id="aboutme"
                  className="textarea textarea-primary w-full mt-5"
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

              <div className="flex flex-col gap-5">
                {resume.educations.map((education, index) => (
                  <div className="bg-base-200 p-5 rounded-lg" key={index}>
                    <p className="text-center text-lg font-semibold">
                      {index + 1}° Education
                    </p>
                    <label htmlFor="title" className="label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="input input-primary w-full"
                      value={education.title}
                      onChange={(e) => {
                        setResume({
                          ...resume,
                          educations: resume.educations.map((edu, i) => {
                            if (i === index) {
                              return {
                                ...edu,
                                title: e.target.value,
                              };
                            }
                            return edu;
                          }),
                        });
                      }}
                    />

                    <label htmlFor="subtitle" className="label">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      className="input input-primary w-full"
                      value={education.subtitle}
                      onChange={(e) => {
                        setResume({
                          ...resume,
                          educations: resume.educations.map((edu, i) => {
                            if (i === index) {
                              return {
                                ...edu,
                                subtitle: e.target.value,
                              };
                            }
                            return edu;
                          }),
                        });
                      }}
                    />

                    <label htmlFor="date" className="label">
                      Date
                    </label>
                    <input
                      type="text"
                      className="input input-primary w-full"
                      value={education.date}
                      onChange={(e) => {
                        setResume({
                          ...resume,
                          educations: resume.educations.map((edu, i) => {
                            if (i === index) {
                              return {
                                ...edu,
                                date: e.target.value,
                              };
                            }
                            return edu;
                          }),
                        });
                      }}
                    />
                  </div>
                ))}
              </div>

              <span className="bg-gradient-to-r from-primary to-secondary w-full block h-1 my-2" />

              <div className="flex flex-col gap-5">
                {resume.experiences.map((experience, index) => (
                  <div className="bg-base-200 p-5 rounded-lg" key={index}>
                    <p className="text-center text-lg font-semibold">
                      {index + 1}° Experience
                    </p>
                    <label htmlFor="title" className="label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="input input-primary w-full"
                      value={experience.title}
                      onChange={(e) => {
                        setResume({
                          ...resume,
                          experiences: resume.experiences.map((exp, i) => {
                            if (i === index) {
                              return {
                                ...exp,
                                title: e.target.value,
                              };
                            }
                            return exp;
                          }),
                        });
                      }}
                    />

                    <label htmlFor="subtitle" className="label">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      className="input input-primary w-full"
                      value={experience.subtitle}
                      onChange={(e) => {
                        setResume({
                          ...resume,
                          experiences: resume.experiences.map((exp, i) => {
                            if (i === index) {
                              return {
                                ...exp,
                                subtitle: e.target.value,
                              };
                            }
                            return exp;
                          }),
                        });
                      }}
                    />

                    <label htmlFor="date" className="label">
                      Date
                    </label>
                    <input
                      type="text"
                      className="input input-primary w-full"
                      value={experience.date}
                      onChange={(e) => {
                        setResume({
                          ...resume,
                          experiences: resume.experiences.map((exp, i) => {
                            if (i === index) {
                              return {
                                ...exp,
                                date: e.target.value,
                              };
                            }
                            return exp;
                          }),
                        });
                      }}
                    />
                  </div>
                ))}
              </div>

              <span className="bg-gradient-to-r from-primary to-secondary w-full block h-1 my-2" />

              <p className="text-xl font-semibold text-center">Work Skills</p>

              <div className="flex flex-wrap gap-5">
                {resume.workSkills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="badge badge-primary flex gap-3 justify-center py-3"
                    >
                      {skill}{" "}
                      {
                        <button
                          onClick={() => {
                            setResume({
                              ...resume,
                              workSkills: resume.workSkills.filter(
                                (s, i) => i !== index
                              ),
                            });
                          }}
                          className="bg-base-300/30 grid place-items-center h-5 w-5 rounded-full"
                        >
                          <FaTimes />
                        </button>
                      }
                    </div>
                  );
                })}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget[0] as HTMLInputElement;
                    if (input.value) {
                      setResume({
                        ...resume,
                        workSkills: [...resume.workSkills, input.value],
                      });
                      input.value = "";
                    }
                  }}
                  className="w-full flex justify-between gap-10"
                >
                  <input
                    placeholder="Input here something you wanna add"
                    type="text"
                    className="input input-primary text-sm text-base-content/40 w-full"
                  />

                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </form>
              </div>

              <span className="bg-gradient-to-r from-primary to-secondary w-full block h-1 my-2" />

              <p className="text-xl font-semibold text-center">Soft Skills</p>

              <div className="flex flex-wrap gap-5">
                {resume.softSkills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="badge badge-primary flex gap-3 justify-center py-3"
                    >
                      {skill}{" "}
                      {
                        <button
                          onClick={() => {
                            setResume({
                              ...resume,
                              softSkills: resume.softSkills.filter(
                                (s, i) => i !== index
                              ),
                            });
                          }}
                          className="bg-base-300/30 grid place-items-center h-5 w-5 rounded-full"
                        >
                          <FaTimes />
                        </button>
                      }
                    </div>
                  );
                })}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget[0] as HTMLInputElement;
                    if (input.value) {
                      setResume({
                        ...resume,
                        softSkills: [...resume.softSkills, input.value],
                      });
                      input.value = "";
                    }
                  }}
                  className="w-full flex justify-between gap-10"
                >
                  <input
                    placeholder="Input here something you wanna add"
                    type="text"
                    className="input input-primary text-sm w-full"
                  />

                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </form>
              </div>
            </section>
          )}
        </div>

        <div
          className={`${
            isSelected === "work"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          } transition-all duration-500 absolute inset-0`}
        >
          {isSelected === "work" && (
            <section className="bg-base-300 p-5 rounded-lg flex flex-col gap-5 relative">
              <Title title="Projects" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {projects.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-base-200 p-5 rounded-lg flex flex-col gap-2"
                  >
                    {project.image !== "" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-lg"
                        width={400}
                        height={200}
                      />
                    ) : (
                      <div className="w-full h-40 bg-base-300 rounded-lg grid place-items-center">
                        Follow Nicory :)
                      </div>
                    )}
                    <p className="text-sm font-mono">{project.type}</p>
                    <span className="flex justify-between items-center">
                      <p className="font-semibold">{project.title}</p>
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const newProjects = projects.projects.filter(
                              (p, i) => i !== index
                            );
                            setProjects({ ...projects, projects: newProjects });
                          }}
                          className="btn btn-error btn-sm"
                        >
                          <FaTimes />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingProject(project);
                          }}
                          className="btn btn-primary btn-sm"
                        >
                          <FaPencilAlt />
                        </button>
                      </div>

                      {isEditingProject &&
                        isEditingProject.title === project.title && (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const formData = new FormData(e.currentTarget);
                              const title = formData.get("title") as string;
                              const type = formData.get("type") as string;
                              const image = formData.get("image") as string;
                              const github = formData.get("github") as string;

                              if (!title && !type && !image && !github) return;

                              const newProjects = projects.projects.map((p) =>
                                p.title === project.title
                                  ? { title, type, image, github }
                                  : p
                              );

                              setProjects({
                                ...projects,
                                projects: newProjects,
                              });
                              setIsEditingProject(null);
                            }}
                            className="mt-5 absolute left-5 bottom-[552px] flex flex-col w-full pr-10 gap-5"
                          >
                            <Title title="Edit Project" />
                            <span className="flex flex-col gap-1">
                              <label htmlFor="title">Title</label>
                              <input
                                type="text"
                                id="title"
                                name="title"
                                defaultValue={project.title}
                                placeholder="Project Name"
                                className="input input-primary text-sm w-full"
                              />
                            </span>

                            <span className="flex flex-col gap-1">
                              <label htmlFor="type">Type</label>
                              <input
                                type="text"
                                id="type"
                                name="type"
                                defaultValue={project.type}
                                placeholder="Project Type"
                                className="input input-primary text-sm w-full"
                              />
                            </span>

                            <span className="flex flex-col gap-1">
                              <label htmlFor="image">Image</label>
                              <input
                                type="text"
                                id="image"
                                name="image"
                                defaultValue={project.image}
                                placeholder="Project Image"
                                className="input input-primary text-sm w-full"
                              />
                            </span>

                            <span className="flex flex-col gap-1">
                              <label htmlFor="github">Github</label>
                              <input
                                type="text"
                                id="github"
                                name="github"
                                defaultValue={project.github}
                                placeholder="Project Github"
                                className="input input-primary text-sm w-full"
                              />
                            </span>

                            <button
                              type="submit"
                              className="btn btn-primary mt-5"
                            >
                              FINISH
                            </button>
                          </form>
                        )}
                    </span>
                  </div>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const title = formData.get("title") as string;
                  const type = formData.get("type") as string;
                  const image = formData.get("image") as string;
                  const github = formData.get("github") as string;

                  if (!title && !type && !image && !github) return;

                  setProjects({
                    ...projects,
                    projects: [
                      ...projects.projects,
                      {
                        title,
                        type,
                        image,
                        github,
                      },
                    ],
                  });
                }}
                className={
                  isEditingProject
                    ? "pt-[552px] flex flex-col gap-5"
                    : "flex flex-col gap-5"
                }
              >
                <Title title="Add new project" />

                <span className="flex flex-col gap-1">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    className="input input-primary text-sm"
                  />
                </span>

                <span className="flex flex-col gap-1">
                  <label htmlFor="type">Type</label>
                  <input
                    id="type"
                    name="type"
                    type="text"
                    required
                    className="input input-primary text-sm"
                  />
                </span>

                <span className="flex flex-col gap-1">
                  <label htmlFor="image">
                    Image URL{" "}
                    <span className="text-xs text-base-content/40">
                      optional
                    </span>
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    className="input input-primary text-sm"
                  />
                </span>

                <span className="flex flex-col gap-1">
                  <label htmlFor="github">Github Link</label>
                  <input
                    id="github"
                    name="github"
                    type="text"
                    required
                    className="input input-primary text-sm"
                  />
                </span>

                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </section>
          )}
        </div>
      </div>
    </Conteiner>
  );
};

export default EditPage;
