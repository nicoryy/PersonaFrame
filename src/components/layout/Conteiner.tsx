import React from "react";

function Conteiner({ children }: { children: React.ReactNode }) {
  return (
    <section className="lg:mx-10 mx-5 py-2 text-left grid gap-5">
      {children}
    </section>
  );
}

export default Conteiner;
