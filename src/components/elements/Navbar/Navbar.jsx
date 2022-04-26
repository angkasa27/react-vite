import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MENU } from "../../../configs/menu";
import Button from "../Button";
import Burger from "../../../assets/svg/Burger";
import Close from "../../../assets/svg/Close";
import { CONTACT } from "../../../configs/link";
import Instagram from "../../../assets/svg/Instagram";
import Linkedin from "../../../assets/svg/LinkedIn";
import Github from "../../../assets/svg/Github";
import Dribbble from "../../../assets/svg/Dribbble";
// import Link from "next/link";
import Logo from "../../../assets/svg/Logo";

const menuVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

const listVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  hidden: { y: "10vh", opacity: 0, transition: { duration: 0.2 } },
};

const Nav = ({ active }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={menuVariant}
            className="fixed z-40 flex h-screen w-screen flex-col items-center justify-end bg-zinc-900 px-6 pt-4 pb-24 text-white"
          >
            <ul className="flex flex-col items-center">
              {MENU.map((v, i) => (
                <motion.li
                  variants={listVariant}
                  key={i}
                  className={
                    "mb-5 border-b-2  " +
                    (v.name === active
                      ? "border-green-500 text-white"
                      : "border-transparent text-zinc-400 ")
                  }
                  onClick={() => setShowMenu(false)}
                >
                  <Button
                    type="text"
                    nav={v.href}
                    className={"hover:text-white "}
                  >
                    <h3>{v.label}</h3>
                  </Button>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center gap-4">
              <a
                href={CONTACT.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Linkedin className="h6 w-6" />
                </motion.div>
              </a>
              <a
                href={CONTACT.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Instagram className="h6 w-6" />
                </motion.div>
              </a>
              <a
                href={CONTACT.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Github className="h6 w-6" />
                </motion.div>
              </a>
              <a
                href={CONTACT.DRIBBBLE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div variants={listVariant}>
                  <Dribbble className="h6 w-6" />
                </motion.div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="defaultTransitionAll fixed z-50 w-screen bg-zinc-900 py-4  px-6 md:px-16">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between text-white">
          {/* <Link href="/"> */}
          <Logo
            className={
              "defaultTransition w-8 cursor-pointer text-white hover:text-green-500 md:w-10 "
            }
          />
          {/* </Link> */}
          <Button
            type="text"
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden"
            ariaLabel="menu"
          >
            {showMenu ? (
              <Close className="h-6 w-6 text-white " />
            ) : (
              <Burger className="h-6 w-6" />
            )}
          </Button>
          <div className="hidden items-center gap-12 md:flex">
            <ul className="gap-12 md:flex">
              {MENU.map((v, i) => (
                <li
                  key={i}
                  onClick={() => setShowMenu(false)}
                  className={
                    " defaultTransition border-b-2 delay-100 " +
                    (v.name === active
                      ? "border-green-500 text-white  "
                      : "border-transparent text-zinc-400 ")
                  }
                >
                  <Button
                    type="text"
                    nav={v.href}
                    className={
                      "defaultTransition delay-100 hover:text-white " +
                      (v.name === active ? "text-white" : "text-zinc-400")
                    }
                  >
                    {v.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
