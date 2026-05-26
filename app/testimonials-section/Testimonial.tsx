"use client";

import { motion, type Variants } from "framer-motion";
import SpotlightCard from "../components/spotLightCard";

const testimonials = [
    {
        quote:
            "Dinesh brought structure to a messy interface and made the delivery feel calm. The final screens were faster, cleaner, and easier for our team to extend.",
        name: "Priya Menon",
        role: "Product Manager",
        project: "Workflow dashboard",
    },
    {
        quote:
            "He thinks beyond the component in front of him. Accessibility, empty states, responsive behavior, and performance were handled without us having to chase them.",
        name: "Arun Krishnan",
        role: "Engineering Lead",
        project: "Design system rollout",
    },
    {
        quote:
            "The prototype turned into production with very little rework. Dinesh kept the UI sharp while still respecting timelines and real product constraints.",
        name: "Meera Shah",
        role: "Founder",
        project: "Campaign studio",
    },
];

const revealEase = [0.2, 0.65, 0.3, 0.9] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 42, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.75, ease: revealEase },
    },
};

export default function Testimonial() {
    return (
        <section
            id="testimonials"
            className="relative z-10 w-full overflow-hidden py-20 md:py-24 lg:py-28"
        >
            <div className="mx-auto w-[87%] lg:max-w-[1440px]">
                <motion.div
                    className="mb-12 grid gap-8 md:grid-cols-12 md:items-end"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: revealEase }}
                >
                    <div className="md:col-span-8">
                        <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#e5484d] dark:text-primary-color">
                            Testimonials
                        </p>
                        <h2 className="max-w-[860px] text-5xl font-extrabold uppercase leading-[0.88] text-zinc-900 dark:text-[#e4ded7] sm:text-7xl lg:text-8xl">
                            What teams say after shipping
                        </h2>
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 md:col-span-4 md:text-right">
                        Practical feedback from product and engineering partners across dashboard, workflow, and interface-heavy builds.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            variants={cardVariants}
                            className={index === 1 ? "lg:mt-12" : ""}
                        >
                            <SpotlightCard
                                className="h-full min-h-[360px]"
                                spotlightColor={index === 1 ? "rgba(51, 224, 146, 0.24)" : "rgba(229, 72, 77, 0.22)"}
                            >
                                <article className="flex h-full min-h-[360px] flex-col justify-between p-6 md:p-8">
                                    <div>
                                        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                                            0{index + 1}
                                        </span>
                                        <p className="mt-8 text-2xl font-semibold leading-snug text-zinc-900 dark:text-[#e4ded7]">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </p>
                                    </div>
                                    <div className="mt-10 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-[#e4ded7]">
                                            {testimonial.name}
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                            {testimonial.role} / {testimonial.project}
                                        </p>
                                    </div>
                                </article>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
