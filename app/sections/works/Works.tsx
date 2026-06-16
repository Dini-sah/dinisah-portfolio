"use client";

import { motion, type MotionProps } from "framer-motion";
import SpotlightCard from "../../components/ui/SpotlightCard";
import RevealHeading from "../../animations/RevealHeading";

const projects = [
    {
        title: "HFI Project Pages",
        type: "Enterprise Web",
        year: "2026",
        impact: "Built campaign pages and integrated the pages into PHP",
        stack: ["PHP", "React", "TypeScript", "Tailwind"],
        description:
            "Created HFI project pages, focusing on responsive page builds, content accuracy, and production-ready frontend delivery.",
    },
    {
        title: "Global Payments Sitecore",
        type: "Sitecore Development",
        year: "2025",
        impact: "Delivered Sitecore frontend updates for the Global Payments",
        stack: ["Sitecore", "JavaScript", "Sass", "HTML"],
        description:
            "Worked with the Global Payments team on Sitecore development, building and updating reusable page sections, layouts, and frontend components.",
    },
    {
        title: "GameIn Commerce Platform",
        type: "Streaming Commerce",
        year: "2024",
        impact: "Enabled gamers and creators to sell products through streams",
        stack: ["React", "Nest", "PostgreSQL", "Fastify", "Redix"],
        description:
            "Worked on a platform for gamers and creators to sell products through a stream-like experience, connecting product discovery with live creator content.",
    },
    {
        title: "Employee Tracker",
        type: "Organization Tool",
        year: "2023",
        impact: "Built an internal MERN stack tracking system",
        stack: ["MongoDB", "Express", "React", "Node"],
        description:
            "Created an employee tracker for the organization using the MERN stack, covering employee records, status visibility, and practical internal workflows.",
    },
];

const workHighlights = [
    "Enterprise CMS page builds",
    "MERN stack internal tools",
    "Creator commerce interfaces",
    "Responsive production delivery",
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
                        <RevealHeading
                            text="Product screens with a builder's mindset"
                            className="max-w-[780px] text-5xl font-extrabold uppercase leading-[0.88] text-zinc-900 dark:text-[#e4ded7] sm:text-7xl lg:text-8xl"
                        />
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
                                            <span className="text-sm text-[#e5484d] dark:text-primary-color">
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
                                            <p className="max-w-[220px] text-md font-semibold text-[#e5484d] dark:text-primary-color md:text-right">
                                                {project.impact}
                                            </p>
                                        </div>
                                    </motion.article>
                                </SpotlightCard>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="grid gap-6 lg:col-span-4" {...sectionAnimation}>
                        <SpotlightCard spotlightColor="rgba(51, 224, 146, 0.24)">
                            <div className="p-6 md:p-8">
                                <div>
                                    <p className="mb-6 text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                                        Work focus
                                    </p>
                                    <h3 className="text-3xl font-bold uppercase leading-[0.92] text-zinc-900 dark:text-[#e4ded7] md:text-4xl">
                                        Frontend work across real product teams.
                                    </h3>
                                    <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                                        Recent work spans internal tools, commerce experiences, and enterprise CMS delivery for teams that need clean, responsive pages shipped reliably.
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
                            <div className="p-6 md:p-8">
                                <p className="mb-6 text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                                    Project range
                                </p>
                                <div className="mb-8 grid grid-cols-2 gap-3">
                                    {["2023", "2024", "2025", "2026"].map((item) => (
                                        <div
                                            key={item}
                                            className="flex min-h-[82px] items-center justify-center rounded-lg border border-zinc-300 p-4 dark:border-zinc-700"
                                        >
                                            <span className="text-2xl font-bold text-zinc-900 dark:text-[#e4ded7]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-3">
                                    {workHighlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="border-t border-zinc-200 pt-3 text-sm font-medium leading-snug text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
                                        >
                                            {highlight}
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
