"use client";

import { projectsAtom } from "@/components/constans";
import Conteiner from "@/components/layout/Conteiner";
import Title from "@/components/layout/Title";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WorkPage = () => {
  const [work] = useAtom(projectsAtom);
  const [filter, setFilter] = useState<
    "All" | "Mobile" | "Website" | "Desktop"
  >("All");

  const handleFilterChange = (
    filterType: "All" | "Mobile" | "Website" | "Desktop"
  ) => {
    setFilter(filterType);
  };

  const filters = [
    "All",
    ...new Set(work.projects.map((project) => project.type)),
  ] as const;

  return (
    <Conteiner>
      <Title title="Portfolio" />

      <ul className="flex gap-5 justify-end transition-opacity duration-500 flex-wrap">
        {filters.map((type) => (
          <li
            key={type}
            className={`font-semibold cursor-pointer transition-opacity duration-500 ${
              filter === type ? "opacity-100 text-secondary" : "opacity-50"
            }`}
            onClick={() =>
              handleFilterChange(
                type as "All" | "Mobile" | "Website" | "Desktop"
              )
            }
          >
            {type}
          </li>
        ))}
      </ul>

      <section
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 transition-opacity duration-500 overflow-y-auto lg:max-h-[calc(100dvh-400px)]"
        style={{
          display: work.projects.filter(
            (project) => filter === "All" || project.type === filter
          ).length
            ? "grid"
            : "none",
          opacity: work.projects.filter(
            (project) => filter === "All" || project.type === filter
          ).length
            ? 1
            : 0.5,
        }}
      >
        {work.projects
          .filter((project) => filter === "All" || project.type === filter)
          .map(({ image, title, type, github }, index) => (
            <div
              className="bg-base-200 p-5 grid gap-2 rounded-lg transition-opacity duration-500"
              key={index}
              style={{ opacity: 1 }}
            >
              {image !== "" ? (
                <Image
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-lg"
                  width={400}
                  height={200}
                />
              ) : (
                <div className="w-full h-40 bg-base-300 rounded-lg grid place-items-center">
                  Follow Nicory :)
                </div>
              )}
              <p className="text-sm font-mono">{type}</p>
              <div className="flex justify-between gap-1">
                <h3 className="font-semibold text-lg">{title}</h3>
                <Link
                  href={github}
                  target="_blank"
                  className="btn btn-sm btn-primary transition-opacity duration-500"
                  style={{ opacity: 1 }}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
      </section>
    </Conteiner>
  );
};

export default WorkPage;

