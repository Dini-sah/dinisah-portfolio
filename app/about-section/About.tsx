"use client";

import SpotlightCard from "../components/spotLightCard";
import Image from "next/image";
import ProfileImage from "../../public/ProfileImage.webp";
import AccentureSVG from "../assets/icons/logo/accenture";
import WorldpaySVG from "../assets/icons/logo/worldpay";
import JeepSVG from "../assets/icons/logo/jeep";
import NasdaqSVG from "../assets/icons/logo/nasdaq";
import FiservSVG from "../assets/icons/logo/fiserv";
import Marquee from "../components/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ChatPopup from "../animations/ChatPopup";
import Counter from "../animations/Counter";
import HtmlLogo from "../assets/icons/tools/Html.svg";
import CssLogo from "../assets/icons/tools/Css.svg";
import JsLogo from "../assets/icons/tools/Js.svg";
import ReactLogo from "../assets/icons/tools/ReactJs.svg";
import NextLogo from "../assets/icons/tools/NextJs.svg";
import NodeLogo from "../assets/icons/tools/Node.svg";
import MongoLogo from "../assets/icons/tools/Mongo.svg";
import TypescriptLogo from "../assets/icons/tools/Typescript.svg";
import ViteLogo from "../assets/icons/tools/Vite.svg";
import TailwindLogo from "../assets/icons/tools/Tailwind.svg";
import SassLogo from "../assets/icons/tools/Sass.svg";
import SalesforceLogo from "../assets/icons/tools/Salesforce.svg";
import JqueryLogo from "../assets/icons/tools/Jquery.svg";
import GsapLogo from "../assets/icons/tools/Gsap.svg";
import GraphLogo from "../assets/icons/tools/Graph.svg";
import AngularLogo from "../assets/icons/tools/Angular.svg";
import BootstrapLogo from "../assets/icons/tools/Bootstrap.svg";

const revealEase = [0.2, 0.65, 0.3, 0.9] as const;

const toolLogos = [
    { src: HtmlLogo, label: "HTML" },
    { src: CssLogo, label: "CSS" },
    { src: JsLogo, label: "JavaScript" },
    { src: ReactLogo, label: "React" },
    { src: NextLogo, label: "Next.js" },
    { src: ViteLogo, label: "Vite" },
    { src: TypescriptLogo, label: "TypeScript" },
    { src: NodeLogo, label: "Node.js" },
    { src: MongoLogo, label: "MongoDB" },
    { src: TailwindLogo, label: "Tailwind" },
    { src: SassLogo, label: "Sass" },
    { src: GsapLogo, label: "GSAP" },
    { src: BootstrapLogo, label: "Bootstrap" },
    { src: SalesforceLogo, label: "Salesforce" },
    { src: AngularLogo, label: "Angular" },
    { src: JqueryLogo, label: "jQuery" },
    { src: GraphLogo, label: "GraphQL" },
];

const parallaxReveal = (delay = 0, distance = 52) => ({
    initial: { opacity: 0, y: distance, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.22 },
    transition: { delay, duration: 0.85, ease: revealEase },
});

export default function About() {
    const imageRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["15%", "-15%"],
    );

    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-center py-20 md:py-24 lg:py-28"
            id="about"
        >
            <div className="mx-auto grid h-full w-[87%] gap-8 md:grid-cols-12 lg:max-w-[1440px]">
                <div className="w-full space-y-2.5 xl:col-span-8 md:col-span-12">
                    <div className="grid h-full w-full grid-cols-1 gap-8 md:grid-cols-12">
                        <motion.div className="row-span-2 md:col-span-6" {...parallaxReveal(0, 44)}>
                            <SpotlightCard className="h-full" spotlightColor="rgba(229, 72, 77, 0.22)">
                                <div className="flex h-full flex-col justify-between p-6">
                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {["Frontend", "Product UI", "Performance"].map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                                        Frontend Developer with 3 years of experience, focused on building user-centered, high-performance digital products with clean, responsive interfaces-and just enough backend knowledge to make everything click behind the scenes.
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                        <motion.div className="relative row-span-3 overflow-hidden md:col-span-6" {...parallaxReveal(0.08, 64)}>
                            <SpotlightCard className="h-full" spotlightColor="rgba(51, 224, 146, 0.24)">
                                <div className="profile_container relative h-full w-full overflow-hidden p-6">
                                    <motion.div className="h-full w-full" ref={imageRef} style={{ translateY }}>
                                        <Image
                                            className="z-[-1] h-full w-full scale-150 object-cover"
                                            src={ProfileImage}
                                            alt="Portrait of Dinesh Kumar"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </motion.div>
                                    <div className="absolute left-6 top-6 rounded-lg border border-white/20 bg-zinc-950/70 px-4 py-3 text-[#e4ded7] backdrop-blur">
                                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Current</p>
                                        <p className="mt-1 text-sm font-bold">Frontend Developer</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <ChatPopup />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                        <motion.div className="relative row-span-3 md:col-span-6" {...parallaxReveal(0.12, 56)}>
                            <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.25)">
                                <div className="flex h-full flex-col justify-between p-6">
                                    <p className="text-xs uppercase tracking-[0.18em] text-[#e5484d] dark:text-primary-color">
                                        About me
                                    </p>
                                    <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                                        My name is <strong data-sticky>Dinesh Kumar</strong> and I enjoy creating things that
                                        live on the internet, whether that be websites, applications, or
                                        anything in between. Since the day I was first introduced to a computer,
                                        its working mechanism piqued my curiosity, and growing up I have been
                                        sharpening my technical skills with the aim of developing something on
                                        my own.
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                        <motion.div className="row-span-2 md:col-span-6" {...parallaxReveal(0.16, 44)}>
                            <a
                                className="group flex min-h-[104px] w-full cursor-pointer items-center justify-between rounded-xl bg-zinc-900 p-6 font-epilogue font-bold text-white dark:bg-[#e4ded7] dark:text-zinc-950 md:text-2xl"
                                href="#contact"
                                data-sticky
                            >
                                <span>Hire Me?</span>
                                <span className="text-4xl">-&gt;</span>
                            </a>
                        </motion.div>
                        <motion.div className="row-span-2 grid grid-cols-12 gap-8 md:col-span-12" {...parallaxReveal(0.2, 46)}>
                            <div className="age col-span-6">
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.25)">
                                    <div className="age_wrapper flex h-full flex-col justify-between p-6">
                                        <h2 className="mb-6 text-xl">Age</h2>
                                        <span className="text-4xl font-bold text-zinc-900 dark:text-[#e4ded7]">
                                            <Counter birthDate="1997-09-08" />
                                        </span>
                                        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Still learning, still shipping.</p>
                                    </div>
                                </SpotlightCard>
                            </div>
                            <div className="project col-span-6">
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.25)">
                                    <div className="project_wrapper flex h-full flex-col justify-between p-6">
                                        <h2 className="mb-6 text-xl">Projects</h2>
                                        <span className="text-4xl font-bold text-zinc-900 dark:text-[#e4ded7]">
                                            <Counter value={10} />
                                        </span>
                                        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Interfaces, dashboards, and workflows.</p>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="row-span-1 grid h-full gap-8 space-y-2.5 xl:col-span-4 md:col-span-6">
                    <motion.div className="md:col-span-12" {...parallaxReveal(0.1, 58)}>
                        <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.25)">
                            <div className="experience_container p-6">
                                <div className="experience_wrapper">
                                    <h2 className="mb-6 text-xl">Experience</h2>
                                    <div className="experience flex flex-col gap-6">
                                        {[
                                            ["2022 - Now", "Frontend Developer", "RR Donnelley"],
                                            ["2018 - 2022", "Business Associate", "Accenture"],
                                            ["2017 - 2018", "Web Developer", "Hi5 Technologies"],
                                        ].map(([year, role, company]) => (
                                            <div key={`${year}-${role}`} className="experience_card flex gap-8 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                                                <div className="year whitespace-nowrap text-neutral-400">
                                                    {year}
                                                </div>
                                                <div className="organisation">
                                                    <p>{role}</p>
                                                    <p>
                                                        <span className="text-sm text-neutral-400">{company}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="companies flex flex-col items-center gap-8 text-center text-sm text-zinc-400">
                                            <p>Companies I&apos;ve collaborated with</p>
                                            <Marquee
                                                styles="opacity-[.3] hover:opacity-[.7] transition duration-300 ease-in-out"
                                                content={[
                                                    <AccentureSVG key="accenture" />,
                                                    <WorldpaySVG key="worldpay" />,
                                                    <JeepSVG key="jeep" />,
                                                    <NasdaqSVG key="nasdaq" />,
                                                    <FiservSVG key="fiserv" />,
                                                ]}
                                                speed={20}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                    <motion.div className="md:col-span-12" {...parallaxReveal(0.16, 58)}>
                        <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.25)">
                            <div className="education_container p-6">
                                <div className="education_wrapper">
                                    <h2 className="mb-6 text-xl">Education</h2>
                                    <div className="education flex flex-col gap-6">
                                        {[
                                            ["2010 - 2012", "SSLC", "DR.Srinivasa Hr Sec, KPM"],
                                            ["2012 - 2014", "Higher Secondary", "Pachaiyappa`s Hr Sec, KPM"],
                                            ["2014 - 2017", "Bachelor of Computer Application", "Madras University"],
                                        ].map(([year, title, place]) => (
                                            <div key={`${year}-${title}`} className="education_card flex gap-8 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                                                <div className="year whitespace-nowrap text-neutral-400">
                                                    {year}
                                                </div>
                                                <div className="organisation">
                                                    <p>{title}</p>
                                                    <p>
                                                        <span className="text-sm text-neutral-400">{place}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
                <div className="row-span-1 grid h-full gap-8 space-y-2.5 md:col-span-12">
                    <motion.div className="row-span-2 md:col-span-12" {...parallaxReveal(0.12, 54)}>
                        <SpotlightCard className="h-full" spotlightColor="rgba(229, 72, 77, 0.2)">
                            <div className="p-6 md:p-8">
                                <div className="mb-8 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#e5484d] dark:text-primary-color">
                                            Stack
                                        </p>
                                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-[#e4ded7]">Toolbox</h2>
                                    </div>
                                    <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                                        {toolLogos.length} tools
                                    </span>
                                </div>
                                <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-9">
                                    {toolLogos.map((tool) => (
                                        <div
                                            key={tool.label}
                                            className="flex aspect-square items-center justify-center rounded-lg border border-[#d8d0c0]/80 bg-[#efe7d8]/70 p-3 shadow-[0_10px_26px_rgba(72,61,45,0.08),inset_0_1px_0_rgba(255,255,255,0.58)] dark:border-zinc-800 dark:bg-white/[0.03] dark:shadow-none"
                                            data-sticky-tooltip={tool.label}
                                        >
                                            <Image src={tool.src} alt={tool.label} width={42} height={42} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
