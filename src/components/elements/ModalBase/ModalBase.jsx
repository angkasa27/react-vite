import Close from "../../../assets/svg/Close";
import { motion, AnimatePresence } from "framer-motion";

const bgVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: "Tween",
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "Tween",
      duration: 0.1,
    },
  },
};

const modalVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "Tween",
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "10vh",
    transition: {
      duration: 0.2,
    },
  },
};

const Modal = ({ children, open, onClose, name, bgClose = false }) => {
  const onClick = () => {
    if (bgClose) return onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate="visible"
          exit="hidden"
          initial="hidden"
          variants={bgVariant}
          onClick={() => onClick()}
          className="fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-neutral-800 bg-opacity-50 p-12 backdrop-blur-sm"
        >
          <motion.div
            variants={modalVariant}
            className="max-w-96 rounded bg-neutral-50 p-2 text-neutral-800"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-poppins font-bold">{name}</h3>
              <button className="cursor-pointer" onClick={() => onClose()}>
                <Close className="h-6 w-6" />
              </button>
            </div>
            <div className="pt-1">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
