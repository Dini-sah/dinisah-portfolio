'use client'
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import HeroSvg from "../assets/icons/HeroSvg";

const Hero = () => {

  const afterTitleAnimation: Variants = {
    initial: {
      opacity: 0,
      y: `1.25em`,
    },
    animate: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 3.05,
        duration: 0.9,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center overflow-hidden bg-cover bg-center py-0 sm:h-[90vh] md:h-[90vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-70"
        initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 3.05, duration: 1.15, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <div className="h-[72%] w-[120%] text-zinc-900 opacity-35 dark:opacity-70 sm:h-[82%] lg:h-[88%] lg:w-[980px]">
          <HeroSvg />
        </div>
      </motion.div>

      <div className="absolute top-10 z-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="#"
            aria-label="dinisah aka Dinesh Kumar"
            className="block rounded-md"
            data-sticky
          >
            <motion.span
              className="hidden dark:text-[#e4ded7] rounded-md border-2 dark:border-[#e4ded7] border-zinc-600 py-2 px-4 text-[14px] font-semibold text-zinc-800 sm:block  md:text-[16px] lg:block"
              variants={afterTitleAnimation}
            >
              DINISAH.
            </motion.span>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="#"
            target="_blank"
            aria-label="View GitHub Profile"
            className="block rounded"
            data-sticky
          >
            <motion.p
              className="text-[16px] font-bold dark:text-[#e4ded7] text-zinc-800 md:text-[16px]"
              variants={afterTitleAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="View LinkedIn Profile"
            className="block rounded"
            data-sticky
          >
            <motion.p
              className="text-[16px] font-bold dark:text-[#e4ded7] text-zinc-800 md:text-[16px]"
              variants={afterTitleAnimation}
            >
              LN
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            aria-label="View Twitter Profile"
            className="block rounded"
            data-sticky
          >
            <motion.p
              className="text-[16px] font-bold dark:text-[#e4ded7] text-zinc-800 md:text-[16px]"
              variants={afterTitleAnimation}
            >
              TW
            </motion.p>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="View Contra Profile"
            className="block rounded"
            data-sticky
          >
            <motion.p
              className="text-[16px] font-bold dark:text-[#e4ded7] text-zinc-800 md:text-[16px]"
              variants={afterTitleAnimation}
            >
              IN
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="relative z-10 -mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-0 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center`}
        >
          <motion.div className="eyebrow mb-4" variants={afterTitleAnimation}>
            <span className="flex justify-center items-center gap-[10px] text-[12px] sm:text-[14px] px-4 py-1 rounded-full border dark:border-[#ffffff14] border-zinc-600">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="version-staleness-indicator fresh" cx="7" cy="7" r="5.5" strokeWidth="3">
                </circle>
              </svg>
              <span className="dark:text-[#e4ded7] text-zinc-800">Available for Freelance</span>
            </span>
          </motion.div>
          <AnimatedTitle title="Dinesh Kumar" style="" />
        </div>
      </div>

      <div
        className="absolute bottom-10 z-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={afterTitleAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium dark:text-[#e4ded7] text-zinc-800 md:text-[20px] lg:text-left">
            Chennai Based Frontend Developer{" "}

            currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={afterTitleAnimation}
        >
          <p className="text-right text-[16px] font-semibold dark:text-[#e4ded7] text-zinc-800 md:text-[20px]">
            Focused on full Stack Apps,{" "} working remotely from Chennai,
            India.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

