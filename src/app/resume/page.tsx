import Conteiner from "@/components/layout/Conteiner";
import IconTitle from "@/components/layout/IconTitle";
import Title from "@/components/layout/Title";
import { BsMortarboard } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa6";

function ResumePage() {
  return (
    <Conteiner>
      <Title title="Resume" />

      {/* education | experience */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* education */}
        <section className="grid gap-5">
          <IconTitle icon={<BsMortarboard size={20} />} title="Education" />
          <div className="p-3 bg-primary flex flex-col justify-between rounded-lg">
            <p className="text-sm">2021-2022</p>
            <p className="font-semibold my-2">Bachelor in Computer Science</p>
            <p className="text-sm">Harvard</p>
          </div>

          <div className="p-3 bg-base-200 flex flex-col justify-between rounded-lg">
            <p className="text-sm">2020-2022</p>
            <p className="font-semibold my-2">FullStack Development</p>
            <p className="text-sm">Brazil Instituition</p>
          </div>
        </section>

        {/* Experience */}
        <section className="grid gap-5">
          <IconTitle icon={<FaBriefcase size={20} />} title="Experience" />
          <div className="p-3 bg-base-200 flex flex-col justify-between rounded-lg">
            <p className="text-sm">2020-Present</p>
            <p className="font-semibold my-2">FullStack Development</p>
            <p className="text-sm">Brazil Instituition</p>
          </div>

          <div className="p-3 bg-primary flex flex-col justify-between rounded-lg">
            <p className="text-sm">2021-2022</p>
            <p className="font-semibold my-2">Bachelor in Computer Science</p>
            <p className="text-sm">Harvard</p>
          </div>
        </section>
      </section>

      {/* work skill | soft skill */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section>
          <IconTitle icon={<FaBriefcase size={20} />} title="Work Skill" />
        </section>
      </section>
    </Conteiner>
  );
}

export default ResumePage;
