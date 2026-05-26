"use client"
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Theme from "../components/theme";

function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed bottom-10 left-0 right-0 z-50 my-0  mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[407.3px]">
            <Link
                href="#"
                target="_blank"
                className="block rounded-md"
                data-sticky-tooltip="View Resume"
            >
                <FontAwesomeIcon
                    icon={faFilePdf}
                    className="py-2 px-2 text-[20px] sm:pr-4 md:py-1"
                />
            </Link>
            <Link href="#home"
                aria-label="Scroll to Home Section"
                onClick={handleScroll}
                className="block rounded"
                data-sticky>
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
                    Home
                </h4>
            </Link>
            <Link href="#about"
                aria-label="Scroll to About Section"
                onClick={handleScroll}
                className="block rounded"
                data-sticky>
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
                    About
                </h4>
            </Link>
            <Link href="#works"
                aria-label="Scroll to Works Section"
                onClick={handleScroll}
                className="block rounded"
                data-sticky>
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
                    Works
                </h4>
            </Link>
            <Link href="#contact"
                aria-label="Scroll to Contact Section"
                onClick={handleScroll}
                className="block rounded"
                data-sticky>
                <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
                    Contact
                </h4>
            </Link>
            <Theme />
        </nav>
    )
}

export default Navbar;
