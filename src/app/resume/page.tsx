"use client";

import { resumeAtom } from "@/components/constans";
import Conteiner from "@/components/layout/Conteiner";
import IconTitle from "@/components/layout/IconTitle";
import Title from "@/components/layout/Title";
import { useAtom } from "jotai";
import { BsMortarboard } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa6";

function ResumePage() {
  const [resume] = useAtom(resumeAtom);

  return (
    <Conteiner>
      <Title title="Resume" />

      {/* education | experience */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* education */}
        <section className="grid gap-5">
          <IconTitle icon={<BsMortarboard size={20} />} title="Education" />

          {resume.educations.map((education, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "p-3 bg-base-200 flex flex-col justify-between rounded-lg"
                  : "p-3 bg-primary text-white dark:text-neutral-content flex flex-col justify-between rounded-lg"
              }
            >
              <p className="text-sm">{education.date}</p>
              <p className="font-semibold my-2">{education.title}</p>
              <p className="text-sm">{education.subtitle}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="grid gap-5">
          <IconTitle icon={<FaBriefcase size={20} />} title="Experience" />

          {resume.experiences.map((experience, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "p-3 bg-base-200 flex flex-col justify-between rounded-lg"
                  : "p-3 bg-primary text-white dark:text-neutral-content flex flex-col justify-between rounded-lg"
              }
            >
              <p className="text-sm">{experience.date}</p>
              <p className="font-semibold my-2">{experience.title}</p>
              <p className="text-sm">{experience.subtitle}</p>
            </div>
          ))}
        </section>
      </section>

      {/* work skill | soft skill */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="grid gap-5">
          <IconTitle title="Work Skill" />

          <div className="flex flex-wrap gap-5">
            {resume.workSkills.map((skill) => (
              <p
                key={skill}
                className="text-sm py-1 px-3 bg-neutral rounded-full badge-neutral text-black dark:text-neutral-content whitespace-nowrap"
              >
                {skill}
              </p>
            ))}
          </div>
        </section>

        <section className="grid gap-5">
          <IconTitle title="Soft Skills" />

          <div className="flex flex-wrap gap-5 place-items-center">
            {resume.softSkills.map((skill) => (
              <p
                key={skill}
                className="text-sm py-1 px-3 bg-neutral rounded-full badge-neutral text-black dark:text-neutral-content whitespace-nowrap"
              >
                {skill}
              </p>
            ))}
          </div>
        </section>
      </section>
    </Conteiner>
  );
}

export default ResumePage;
