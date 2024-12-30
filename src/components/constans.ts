import { atom } from "jotai";

export const homeAtom = atom({
  id: "home",
  aboutme:
    "Hello  there! I‘m thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.",
  whatido: {
    section1: {
      title: "Development",
      description:
        "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I‘m always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    },
    section2: {
      title: "Mobile",
      description:
        "With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people‘s lives. Let‘s turn ideas into reality and shape the future together.",
    },
    section3: {
      title: "Design",
      description:
        "Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I‘m truly fanatic about",
    },
    section4: {
      title: "Mentorship",
      description:
        "I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.",
    },
  },
});

export const profileAtom = atom({
  id: "profile",
  firstname: "Pedro",
  lastname: "Nicory",
  role: "FullStack Developer",
  linkedin: "https://www.linkedin.com/in/nicoryy/ ",
  github: "https://github.com/nicoryy",
  instagram: "https://www.instagram.com/pedr_ncry/ ",
  x: "https://www.x.com/nicoryy",
  phone: "+55 11 9 9999-9999",
  email: "pedronicory@gmail.com",
  location: "Fortaleza, Brazil",
  resume:
    "https://drive.google.com/file/d/1ta1-8-tO8oahJcQoiOpZZww547-OuOZZ/view",
});
