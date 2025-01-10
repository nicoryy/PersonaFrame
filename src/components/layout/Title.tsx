import React from "react";

function Title({title}: {title: string}) {
  return (
    <div className="flex gap-5 w-full items-center justify-start">
      <p className="uppercase text-nowrap text-2xl font-semibold">{title}</p>
      <span className="bg-gradient-to-r from-primary to-secondary w-full block h-0.5" />
    </div>
  );
}

export default Title;
