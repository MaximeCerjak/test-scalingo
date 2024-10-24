"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatedModalDemo } from "./ui/Modal";
import { Navigation } from "./ui/NavMenu";
import Image from "next/image";
import AnimatedMenu from "./ui/AnimatedMenu";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuOpen]);

    return (
        <nav className="flex items-center justify-between bg-black bg-opacity-50">
            <div className="max-w-layout mx-auto flex w-full gap-6 py-2 px-6">
                <div className="flex justify-center items-center lg:p-9 relative">
                    <input
                        type="checkbox"
                        id="menu-toggle"
                        className="hidden peer"
                        checked={isMenuOpen}
                        onChange={toggleMenu}
                    />
                    <motion.div
                        onClick={toggleMenu}
                        className="cursor-pointer lg:hidden"
                        initial={false}
                        animate={{
                            rotate: isMenuOpen ? 180 : 0,
                            scale: isMenuOpen ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </motion.div>
                    <Image
                        src={"/Icone.svg"}
                        alt={"Logo Illusion"}
                        fill
                        objectFit="contain"
                        className="hover:scale-110 transform transition duration-500 hidden lg:block"
                    />
                    <div
                        className={`fixed h-full top-16 inset-x-0 bg-black origin-top transform ${
                            isMenuOpen ? "scale-y-100" : "scale-y-0"
                        } transition-transform duration-200 ease-in-out z-10 overflow-hidden p-10 pb-[120px]`}
                    >
                        <ul className="flex flex-col h-full justify-center items-center font-monsterrat text-2xl gap-10 font-bold">
                            <AnimatedMenu isOpen={isMenuOpen} />
                        </ul>
                    </div>
                </div>
                <div className="flex-1 py-6 flex flex-row w-full justify-center relative">
                    <Navigation />
                    <Image
                        src={"/Icone.svg"}
                        alt={"Logo Illusion"}
                        fill
                        objectFit="contain"
                        className="hover:scale-110 transform transition duration-500 block lg:hidden"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <AnimatedModalDemo />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
