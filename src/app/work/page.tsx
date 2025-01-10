"use client";

import { projectsAtom } from "@/components/constans";
import Conteiner from "@/components/layout/Conteiner";
import Title from "@/components/layout/Title";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

const WorkPage = () => {
  const [work] = useAtom(projectsAtom);

  return (
    <Conteiner>
      <Title title="Portfolio" />

      <ul className="flex gap-5 justify-end">
        <li className="font-semibold text-secondary">All</li>
        <li>Mobile</li>
        <li>Website</li>
        <li>Desktop</li>
      </ul>

      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {work.projects.map(({ image, title, type, github }, index) => (
          <div className="bg-base-200 p-5 grid gap-2 rounded-lg" key={index}>
            {/* Change this with your image */}
            {image !== "" ? (
              <Image
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg"
                width={400}
                height={200}
              />
            ) : (
              <div className="w-full h-40 bg-base-300 rounded-lg    grid place-items-center  ">
                Follow Nicory :)
              </div>
            )}
            <p className="text-sm font-mono">{type}</p>
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">{title}</h3>
              <a
                href={github}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </section>
    </Conteiner>
  );
};

export default WorkPage;
