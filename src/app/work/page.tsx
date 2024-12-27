import Conteiner from "@/components/layout/Conteiner";
import Title from "@/components/layout/Title";
import React from "react";

const WorkPage = () => {
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
        {[
          {
            picture: "Image Example",
            title: "El_Chancho Menu",
            type: "Mobile",
          },
          {
            picture: "Image Example",
            title: "L&L - Assessoria e Serviços",
            type: "Website",
          },
          {
            picture: "Image Example",
            title: "Persona Frame",
            type: "Website",
          },
          {
            picture: "Image Example",
            title: "Auto Create Dir",
            type: "desktop",
          },
        ].map(({ picture, title, type }, index) => (
          <div className="bg-base-200 p-5 grid gap-2 rounded-lg" key={index}>
            {/* Change this with your image */}
            <div className="w-full h-40 bg-base-300 rounded-lg    grid place-items-center  ">
              {picture}
            </div>
            <p className="text-sm font-mono">{type}</p>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
        ))}
      </section>
    </Conteiner>
  );
};

export default WorkPage;
