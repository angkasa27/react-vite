import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/elements/Navbar";
import moment from "moment";
import Button from "../../components/elements/Button";
import ReactTypingEffect from "react-typing-effect";
import Instagram from "../../assets/svg/Instagram";
import Linkedin from "../../assets/svg/LinkedIn";
import Github from "../../assets/svg/Github";
import Dribbble from "../../assets/svg/Dribbble";
import Image from "../../assets/image";
import { SKILLS } from "../../configs/skills";
import { MENU } from "../../configs/menu";
import ExternalLink from "../../assets/svg/ExternalLink";
import Code from "../../assets/svg/Code";
import Html5 from "../../assets/svg/Html5";
import Tailwind from "../../assets/svg/Tailwind";
import NextJs from "../../assets/svg/NextJs";
import { MYWORK, OTHERPROJECTS } from "../../configs/projects";
import Arrow from "../../assets/svg/ArrowSm";
import { motion } from "framer-motion";
import { CONTACT } from "../../configs/link";

export default function Main() {
  const [section, setSection] = useState("home");

  return (
    <div className="w-full bg-zinc-900">
      <Cover />
      <Navbar active={section} />
      <BottomNav active={section} />
      <div className=" mx-auto w-full max-w-screen-xl px-8 text-white md:px-24">
        <Home setSection={setSection} name="main" />
        <About setSection={setSection} name="about" />
        <Skills setSection={setSection} name="skills" />
        <Projects setSection={setSection} name="project" />
        <Contact setSection={setSection} name="contact" />
      </div>
    </div>
  );
}

const Home = ({ color, setSection, name }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setSection(name);
    }
  }, [inView]);

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4 "
    >
      <h3 className={" font-bold text-green-500"}>
        {getGreetingTime(moment())}!
      </h3>
      <h1 className="font-bold">Dimas Angkasa Nurindra</h1>
      <h2 ref={ref} className="font-bold text-zinc-400">
        <ReactTypingEffect
          typingDelay={200}
          speed={30}
          eraseSpeed={30}
          eraseDelay={2000}
          text={[`Frontend Developer`, `Graphic Designer`]}
        />
      </h2>
      <h5 className="text-zinc-400">
        I design and build websites that look good, and work well.
      </h5>
      <div>
        <Button className={"bg-green-500 text-white hover:bg-green-700"}>
          See my Work
        </Button>
      </div>
    </section>
  );
};

const About = ({ setSection, name }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setSection(name);
    }
  }, [inView]);

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">About</h2>
      <div ref={ref} className="h-1 w-36 bg-green-500" />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 flex flex-col gap-4 text-zinc-400 md:col-span-2">
          <p className="">
            Hello! I'm Dimas Angkasa, a front-end developer and graphic designer
            from East Java, Indonesia.
          </p>
          <p className="">
            Currently, I'm working at Telkom Indonesia Tribe EWZ as a frontend
            developer.
          </p>
          <p className="">
            After graduating from SMK Telkom Malang, I continue my study at
            Binus University for Bachelor's degree majoring in Information
            Systems.
          </p>
          <p className="">
            In recent years, I've been focused on programming, building a solid
            frontend stack, and creating exciting projects that solve real-world
            problems.
          </p>
          <p className="">
            Alongside my study and development work, I run an online web
            invitation based on requests called SuratBahagia and moklet
            developer's community based on GitHub with my friends, so I like to
            keep busy!
          </p>
        </div>
        <div className="col-span-3 row-start-1 h-auto w-full overflow-hidden rounded bg-green-600 md:col-span-1 md:row-start-auto">
          <img
            alt="mypicture"
            src={Image.MySelfTrans}
            className="scale-125 drop-shadow-xl saturate-50"
          />
        </div>
      </div>
    </section>
  );
};

const Skills = ({ setSection, name }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setSection(name);
    }
  }, [inView]);

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">Skills</h2>
      <div ref={ref} className="h-1 w-36 bg-green-500" />
      <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-6">
        {SKILLS.map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Icon className="defaultTransitionAll w-14 text-zinc-600 hover:-translate-y-1 hover:text-green-500 md:w-20" />
            <p className="text-center text-sm font-bold tracking-wider text-zinc-400 md:text-lg">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = ({ setSection, name }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setSection(name);
    }
  }, [inView]);

  return (
    <section
      id={name}
      className="flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">My Work</h2>
      <div className="h-1 w-36 bg-green-500" ref={ref} />
      {MYWORK.map(({ name, href, image, desc, label, source }) => (
        <div key={name} className="mt-4 grid-cols-6 md:grid">
          <div className="col-start-1 col-end-6 row-start-1 overflow-hidden rounded-t ring-2 ring-green-500 md:rounded md:ring-zinc-600">
            <img src={image} className="w-full" />
          </div>
          <div className="col-start-4 col-end-7 row-start-1 flex items-end md:pb-12">
            <div className="flex w-full flex-col gap-2 rounded-b bg-zinc-800 p-4 ring-2 ring-zinc-600 md:rounded md:p-8  md:ring-green-500">
              <p className="font-bold tracking-wide text-zinc-400">{label}</p>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold tracking-wide">{name}</h3>

                <div className="flex flex-wrap gap-2 text-sm font-bold uppercase tracking-wide text-zinc-600 md:text-base">
                  <div className="flex items-center gap-1">
                    <Html5 className="h-4" /> HTML
                  </div>
                  <div className="flex items-center gap-1">
                    <NextJs className="h-4" /> Next
                  </div>
                  <div className="flex items-center gap-1">
                    <Tailwind className="h-4" /> Tailwind
                  </div>
                </div>
              </div>
              <p className="my-2 text-zinc-400">{desc}</p>
              <div className="flex gap-4">
                <Button
                  href={href}
                  className="flex items-center bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                >
                  <ExternalLink className="mr-2 w-6" />
                  Live
                </Button>
                {!!source && (
                  <Button
                    href={source}
                    className="flex items-center bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                  >
                    <Github className="mr-2 w-6" />
                    Source
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <h2 className="mt-12 text-center font-bold">Other Projects</h2>
      <div className="mx-auto h-1 w-36 bg-green-500" />
      <p className="text-center text-zinc-400">
        Check out some of the other projects I've been create
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {OTHERPROJECTS.map(({ tags, name, href, desc, source }) => (
          <div
            key={name}
            className="flex w-full flex-col justify-between gap-2 rounded-b bg-zinc-800 p-4  md:rounded md:p-8 "
          >
            <div className="flex flex-col gap-2">
              <Code className="w-8 text-green-500" />
              <h5 className="font-bold tracking-wide">{name}</h5>
              <div className="h-1 w-full bg-green-500" />
              <p className="my-2 text-zinc-400">{desc}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 text-sm font-bold uppercase tracking-wide text-zinc-600 md:text-base">
                {tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  href={href}
                  className="bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                >
                  <ExternalLink className="w-6" />
                </Button>
                {!!source && (
                  <Button
                    href={source}
                    className="bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
                  >
                    <Github className="w-6" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = ({ setSection, name }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setSection(name);
    }
  }, [inView]);

  return (
    <section
      id={name}
      className="relative flex min-h-screen flex-col justify-center gap-4"
    >
      <h2 className=" font-bold ">Contact</h2>
      <div ref={ref} className="h-1 w-36 bg-green-500" />
      <p className="text-zinc-400">
        I'm currently available to get involved in new projects, so get in touch
        if you'd like to work together.
      </p>
      <p className="text-zinc-400">
        Simply email me at{" "}
        <span className="font-bold tracking-wide text-green-500">
          mas.angkasa27@gmail.com
        </span>{" "}
        and let's talk about your project!
      </p>
      <footer className="absolute bottom-0 flex w-full flex-col gap-4 py-6 md:py-16">
        <div className="h-1 w-full bg-zinc-600" />
        <div className="flex justify-between text-zinc-400">
          <p>© Create by Dimas Angkasa 2022</p>
          <Button
            nav="/#main"
            type="text"
            className="hover:-translate-y-1 hover:text-white"
          >
            <Arrow className="w-6" />
          </Button>
        </div>
      </footer>
    </section>
  );
};

const getGreetingTime = (currentTime) => {
  if (!currentTime || !currentTime.isValid()) {
    return "Hello";
  }

  const splitAfternoon = 11; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format("HH"));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return "🏙️ Good Afternoon";
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return "🌃 Good Evening";
  }
  // Between dawn and noon
  return "🌄 Good Morning";
};

const BottomNav = ({ active }) => {
  return (
    <div className="fixed bottom-0 hidden w-screen md:block">
      <div className="relative mx-auto w-full max-w-screen-xl">
        <div className="absolute bottom-0 flex flex-col items-center gap-6">
          <Button
            href={CONTACT.DRIBBBLE}
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Dribbble className="h-6 w-6" />
          </Button>
          <Button
            href={CONTACT.GITHUB}
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            href={CONTACT.INSTAGRAM}
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Instagram className="h-6 w-6" />
          </Button>
          <Button
            href={CONTACT.LINKEDIN}
            className="text-white hover:-translate-y-1 hover:text-green-500"
            type="text"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <div className="h-24 w-0.5 bg-zinc-500" />
        </div>
        <div className="absolute bottom-0 right-0 flex flex-col items-center gap-6">
          {MENU.map(({ name, href }) => (
            <a key={name} href={href}>
              <div
                className={
                  "defaultTransitionAll h-4 w-4 cursor-pointer rounded-full border border-white  hover:scale-110 hover:border-white " +
                  (name === active && " scale-110 bg-white")
                }
              />
            </a>
          ))}

          <div className="h-24 w-0.5 bg-zinc-500" />
        </div>
      </div>
    </div>
  );
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    fill: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 1)"],
    pathLength: [0, 1, 1],
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const containerVariant = {
  visible: {
    x: "-101vw",
    // opacity: [1, 0, 0],
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.4,
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    x: 0,
    // opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

export const visibleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1],
    transition: {
      duration: 0.2,
      delay: 1.7,
      ease: "easeIn",
    },
  },
};

export const visibleVariant2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 0, 1, 0, 1, 0, 1],
    transition: {
      duration: 0.3,
      delay: 2.1,
      ease: "easeIn",
    },
  },
};

export const visibleVariant3 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 2.35,
      ease: "easeIn",
    },
  },
};

const Cover = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      className="fixed z-[100] flex h-screen w-full items-center justify-center bg-zinc-800"
    >
      <div className=" relative text-white">
        <svg
          className="h-28 w-28 md:h-48 md:w-48"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariants}
            d="M17.7468 63.0774L125 1.1547L232.253 63.0774V186.923L125 248.845L17.7468 186.923V63.0774Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute top-0 h-28 w-28 text-zinc-900 md:h-48 md:w-48"
          viewBox="0 0 250 250"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={visibleVariant}
            d="M30.7881 82.5123V181.85L62.1307 199.914V172.816L85.6524 186.365V213.463L116.995 231.527V132.195L30.7881 82.5123ZM85.6363 159.277L62.1147 145.738V127.675L85.6363 141.224V159.277Z"
          />
          <motion.path
            variants={visibleVariant2}
            d="M39.4089 67.7604L124.997 18.4729L148.346 31.9491L86.0945 67.7604L93.8772 72.2349L156.123 36.4235L210.591 67.7604L124.997 116.995L101.655 103.566L163.948 67.734L156.123 63.2807L93.8772 99.092L39.4089 67.7604Z"
          />
          <motion.path
            variants={visibleVariant3}
            d="M133.005 132.193V231.527L164.35 213.459V186.365L187.866 172.815V199.909L219.212 181.847V82.5123L133.005 132.193ZM187.861 145.716L164.345 159.266V141.224L187.861 127.674V145.716Z"
          />
        </svg>
      </div>
    </motion.div>
  );
};
