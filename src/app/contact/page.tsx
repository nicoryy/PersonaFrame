import Conteiner from "@/components/layout/Conteiner";
import IconTitle from "@/components/layout/IconTitle";
import Title from "@/components/layout/Title";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const ContactPage = () => {
  return (
    <Conteiner>
      <Title title="Contact" />

      <section className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="grid gap-2 bg-base-300 p-5 rounded-lg w-full ">
          <IconTitle title="Phone :" icon={<FaPhone size={20} />} />

          <p className="text-sm pl-10">+(11) 9 9999-9999</p>
          <p className="text-sm pl-10">+(12) 9 9999-9999</p>
        </div>

        <div className="grid gap-5 bg-base-300 p-5 rounded-lg w-full">
          <IconTitle title="Email :" icon={<GoMail size={20} />} />

          <p className="text-sm pl-10">pedronicory@gmail.com</p>
        </div>
      </section>

      <section className="bg-base-300 p-5 rounded-lg text-sm grid gap-5">
        <p>
          I am always open to discussing{" "}
          <b>new projects, opportunities in tech world, partnerships</b> and
          more so <b>mentorship</b>.{" "}
        </p>

        <form className="grid gap-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="input w-full"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input w-full"
          />

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="textarea w-full"
          />

          <button className="btn btn-outline btn-secondary w-32 rounded-full">
            Send
          </button>
        </form>
      </section>
    </Conteiner>
  );
};

export default ContactPage;
