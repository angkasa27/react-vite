import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Chevron from "../../../assets/svg/Chevron";
import { useInterval } from "../../../utils/time";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "80%" : "-80%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "80%" : "-80%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Example = (props) => {
  const {
    item,
    className,
    itemClass,
    renderItem = () => {},
    autoSlide,
    chevron = false,
    navClass,
  } = props;
  const [[page, direction], setPage] = useState([0, 0]);
  const { activeClass, disabledClass } = navClass || {};
  const itemIndex = wrap(0, item.length, page);

  const active = activeClass || "bg-pink-200";
  const disabled = disabledClass || "bg-slate-100";

  if (autoSlide) {
    useInterval(
      () => {
        paginate(1);
      },
      typeof autoSlide === "number" ? autoSlide : 5000
    );
  }

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={"relative " + className}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={"absolute top-0 bottom-0 left-0 right-0 " + itemClass}
          transition={{
            x: { type: "spring", stiffness: 500, damping: 50 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {renderItem(item[itemIndex])}
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-1/2 -bottom-10 z-10 flex translate-x-1/2 gap-2">
        {chevron ? (
          <>
            <div
              className="defaultTransition rotate-90 cursor-pointer rounded-full bg-slate-200 text-white hover:bg-slate-300"
              onClick={() => paginate(-1)}
            >
              <Chevron className="h-8 w-8" />
            </div>
            <div
              className="defaultTransition -rotate-90 cursor-pointer rounded-full bg-slate-200 text-white hover:bg-slate-300"
              onClick={() => paginate(1)}
            >
              <Chevron className="h-8 w-8" />
            </div>
          </>
        ) : (
          item.map((v, i) => (
            <div
              onClick={() => paginate(i - (page % item.length))}
              className={
                "h-4 w-4 cursor-pointer rounded-full " +
                (page % item.length === i ? active : disabled)
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Example;
