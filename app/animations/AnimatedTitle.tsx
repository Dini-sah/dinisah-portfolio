"use client"
import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTitleProps = {
    title: string;
    style?: string;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, style = '' }) => {

    const letterCount = 3;
    const getRollingDirection = (wordIndex: number, charIndex: number) => {
        const direction = (wordIndex + charIndex) % 2 === 0 ? 'up' : 'down';
        const rolls = ((wordIndex + charIndex) % letterCount) + letterCount;
        if (direction === 'up') {
            return {
                initialY: `${rolls * 100}%`,
                targetY: `-200%`
            };
        } else {
            return {
                initialY: `-${rolls * 100}%`,
                targetY: '0%',
            };
        }
    };

    return (
        <h1 aria-label={title} role="heading">
            <span
                className={`flex gap-4 max-w-[500px] flex-col overflow-hidden text-center text-[96px] font-extrabold leading-[0.8em] text-[#e5484d] dark:text-[#e4ded7] sm:text-[120px] sm:leading-[0.85em] md:max-w-[900px] md:text-[155.5px] lg:text-[180px] uppercase ${style}`}
            >
                {title.split(' ').map((word, wordIndex) => (
                    <span
                        key={wordIndex}
                        className="inline-flex justify-center overflow-hidden h-[0.7em] leading-[0.7em]"
                    >
                        {word.split('').map((char, charIndex) => {
                            const { initialY, targetY } = getRollingDirection(wordIndex, charIndex);
                            return (
                                <motion.span
                                    key={charIndex}
                                    className="character-roll"
                                    initial={{ y: initialY }}
                                    animate={{ y: targetY }}
                                    transition={{
                                        duration: 2,
                                        delay: 0.2 * charIndex,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {[...Array(letterCount)].map((_, index) => (
                                        <span key={index}>
                                            {char}
                                        </span>
                                    ))}
                                </motion.span>
                            )
                        })}
                    </span>
                ))}
            </span>
        </h1>
    );
};


export default AnimatedTitle;
