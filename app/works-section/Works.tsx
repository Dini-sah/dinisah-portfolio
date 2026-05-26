"use client";

import { motion, type MotionProps } from "framer-motion";
import SpotlightCard from "../components/spotLightCard";

const projects = [
    {
        title: "Revenue Console",
        type: "SaaS Dashboard",
        year: "2025",
        impact: "Cut report review time by 42%",
        stack: ["Next.js", "TypeScript", "Tailwind", "Node"],
        description:
            "A dense operator dashboard for finance teams with filtered drilldowns, reusable table states, and fast client-side transitions.",
    },
    {
        title: "Campaign Studio",
        type: "Marketing Tool",
        year: "2024",
        impact: "Moved 11 manual steps into one flow",
        stack: ["React", "GSAP", "REST", "Salesforce"],
        description:
            "A guided build surface for campaign teams, combining live preview, validation, and release-ready assets in a single workspace.",
    },
    {
        title: "Vendor Portal",
        type: "Workflow App",
        year: "2023",
        impact: "Improved mobile task completion",
        stack: ["Angular", "Sass", "MongoDB", "GraphQL"],
        description:
            "Responsive portal modules for onboarding, document checks, and status visibility across internal and external users.",
    },
];

const principles = [
    "Make interfaces obvious under pressure",
    "Ship small, measurable improvements",
    "Keep design systems useful, not ceremonial",
    "Treat performance as part of the UX",
];

const revealEase = [0.2, 0.65, 0.3, 0.9] as const;

const sectionAnimation: MotionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.8, ease: revealEase },
};

export default function Works() {
    return (
        <section
            id="works"
            className="relative z-10 w-full overflow-hidden py-20 md:py-24 lg:py-28"
        >
            <div className="mx-auto w-[87%] lg:max-w-[1440px]">
                <motion.div
                    className="mb-12 grid gap-8 md:grid-cols-12 md:items-end"
                    {...sectionAnimation}
                >
                    <div className="md:col-span-7">
                        <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#e5484d] dark:text-primary-color">
                            Selected work
                        </p>
                        <h2 className="max-w-[780px] text-5xl font-extrabold uppercase leading-[0.88] text-zinc-900 dark:text-[#e4ded7] sm:text-7xl lg:text-8xl">
                            Product screens with a builder&apos;s mindset
                        </h2>
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 md:col-span-5 md:text-right">
                        I focus on useful details: fast loading states, keyboard-friendly flows, readable data, and components that teams can keep shipping with.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-12">
                    <motion.div className="lg:col-span-8" {...sectionAnimation}>
                        <div className="grid gap-6">
                            {projects.map((project, index) => (
                                <SpotlightCard
                                    key={project.title}
                                    className="group min-h-[280px]"
                                    spotlightColor="rgba(229, 72, 77, 0.24)"
                                >
                                    <motion.article
                                        className="grid h-full gap-8 p-6 md:grid-cols-12 md:p-8"
                                        initial={{ opacity: 0, y: 28 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: index * 0.08, duration: 0.7, ease: revealEase }}
                                    >
                                        <div className="md:col-span-3">
                                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                                0{index + 1} / {project.year}
                                            </span>
                                        </div>
                                        <div className="space-y-6 md:col-span-6">
                                            <div>
                                                <p className="mb-3 text-sm uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                                    {project.type}
                                                </p>
                                                <h3 className="text-3xl font-bold text-zinc-900 dark:text-[#e4ded7] md:text-5xl">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-end md:col-span-3 md:justify-end">
                                            <p className="max-w-[220px] text-lg font-semibold text-[#e5484d] dark:text-primary-color md:text-right">
                                                {project.impact}
                                            </p>
                                        </div>
                                    </motion.article>
                                </SpotlightCard>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="lg:col-span-4" {...sectionAnimation}>
                        <SpotlightCard className="h-full" spotlightColor="rgba(51, 224, 146, 0.24)">
                            <div className="flex h-full min-h-[520px] flex-col justify-between p-6 md:p-8">
                                <div>
                                    <p className="mb-6 text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                                        Operating pattern
                                    </p>
                                    <h3 className="text-4xl font-bold uppercase leading-[0.9] text-zinc-900 dark:text-[#e4ded7] md:text-5xl">
                                        Prototype. Measure. Harden.
                                    </h3>
                                </div>

                                <div className="my-10 grid grid-cols-2 gap-3">
                                    {["01", "02", "03", "04"].map((item) => (
                                        <div
                                            key={item}
                                            className="aspect-square rounded-lg border border-zinc-300 p-4 dark:border-zinc-700"
                                        >
                                            <span className="text-3xl font-bold text-zinc-900 dark:text-[#e4ded7]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-4">
                                    {principles.map((principle) => (
                                        <li
                                            key={principle}
                                            className="border-t border-zinc-200 pt-4 text-base font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
                                        >
                                            {principle}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
