import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type Props = {
    birthDate?: string,
    value?: number;
    className?: string;
    precision?: number;
};

export default function Counter({ birthDate, value, className, precision = 0 }: Props) {
    const ref = useRef<HTMLSpanElement | null>(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 250 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && value) {
            motionValue.set(value);
        }
        let frameId: number;
        if (isInView && birthDate) {
            const birth = new Date(birthDate)
            const updateAge = () => {
                const now = new Date();
                const ageInMs = now.getTime() - birth.getTime();
                const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
                if (ref.current) {
                    ref.current.textContent = precision > 0
                        ? ageInYears.toFixed(precision)
                        : `${Math.floor(ageInYears)}`;
                }
                frameId = requestAnimationFrame(updateAge);
            }
            frameId = requestAnimationFrame(updateAge);
        }

        return () => cancelAnimationFrame(frameId);
    }, [isInView, value, motionValue, birthDate, precision]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest: number) => {
            if (ref.current) {
                ref.current.textContent = `${latest.toFixed(0)}+`;
            }
        });

        return () => unsubscribe();
    }, [springValue]);

    return <span className={className} ref={ref} />;
}
