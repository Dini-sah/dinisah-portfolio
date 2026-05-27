"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "../../components/ui/SpotlightCard";

const revealEase = [0.2, 0.65, 0.3, 0.9] as const;

const contactLinks = [
    { label: "Email", value: "dineshaem1997@gmail.com", href: "mailto:dineshaem1997@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/dineshkumar", href: "https://www.linkedin.com/in/dinesh-kumar-rajasha-866847142/" },
    { label: "GitHub", value: "github.com/dinisah", href: "https://github.com/Dini-sah" },
];

const availability = [
    "Frontend engineering",
    "Design system implementation",
    "Dashboard and workflow UI",
    "Performance cleanup",
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative z-10 w-full overflow-hidden py-20 md:py-24 lg:py-28"
        >
            <div className="mx-auto grid w-[87%] gap-8 lg:max-w-[1440px] lg:grid-cols-12">
                <motion.div
                    className="lg:col-span-8"
                    initial={{ opacity: 0, y: 42 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: revealEase }}
                >
                    <SpotlightCard className="min-h-[520px] md:min-h-[560px]" spotlightColor="rgba(229, 72, 77, 0.24)">
                        <div className="flex min-h-[520px] flex-col justify-between p-5 sm:p-6 md:min-h-[560px] md:p-10">
                            <div>
                                <p className="mb-6 text-sm uppercase tracking-[0.18em] text-[#e5484d] dark:text-primary-color max-[374px]:mb-5 max-[374px]:text-xs">
                                    Contact
                                </p>
                                <h2 className="max-w-[900px] text-[clamp(2.5rem,14vw,6rem)] font-extrabold uppercase leading-[0.88] text-zinc-900 dark:text-[#e4ded7] sm:text-8xl lg:text-[132px]">
                                    Let&apos;s build the next sharp interface
                                </h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 md:items-end">
                                <p className="max-w-[420px] text-base font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
                                    Send the problem, product context, and what needs to move. I&apos;ll reply with a practical path forward.
                                </p>
                                <Link
                                    href="mailto:dineshaem1997@gmail.com"
                                    className="flex min-h-[72px] items-center justify-center rounded-lg bg-zinc-900 px-5 text-base font-bold text-white dark:bg-[#e4ded7] dark:text-zinc-950 sm:px-6 sm:text-lg"
                                    data-sticky
                                >
                                    Start a Project
                                </Link>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                <motion.div
                    className="grid gap-8 lg:col-span-4"
                    initial={{ opacity: 0, y: 42 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ delay: 0.08, duration: 0.8, ease: revealEase }}
                >
                    <SpotlightCard spotlightColor="rgba(51, 224, 146, 0.24)">
                        <div className="p-5 sm:p-6 md:p-8">
                            <h3 className="mb-8 text-xl font-bold text-zinc-900 dark:text-[#e4ded7] sm:text-2xl">
                                Available for
                            </h3>
                            <div className="space-y-4">
                                {availability.map((item) => (
                                    <p
                                        key={item}
                                        className="border-t border-zinc-200 pt-4 text-sm font-medium leading-snug text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 sm:text-base"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
                        <div className="p-5 sm:p-6 md:p-8">
                            <h3 className="mb-8 text-xl font-bold text-zinc-900 dark:text-[#e4ded7] sm:text-2xl">
                                Links
                            </h3>
                            <div className="space-y-5">
                                {contactLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        className="block rounded border-t border-zinc-200 pt-5 dark:border-zinc-800"
                                        data-sticky
                                    >
                                        <span className="block text-sm uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                            {link.label}
                                        </span>
                                        <span className="mt-2 block break-words text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                                            {link.value}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
}
