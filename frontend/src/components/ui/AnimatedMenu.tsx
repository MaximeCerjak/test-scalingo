"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AnimatedMenu = ({ isOpen }: { isOpen: boolean }) => {
    const menuItems = [
        { label: "Accueil" },
        {
            label: "Expérience",
            subItems: [
                "ILLUSION - Aventure",
                "EVA - Battle & Zombies",
                "WESTR - Simulation Auto",
            ],
        },
        {
            label: "Évènements",
            subItems: [
                "EVG - EVJF",
                "Anniversaire",
                "Team Building",
                "Séminaire",
                "Esport",
            ],
        },
        { label: "Tarifs" },
        { label: "Bon cadeau" },
        { label: "Aide", subItems: ["CONTACT", "FAQ", "LOCALISATION"] },
    ];

    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(
        null
    );

    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };

    // Réinitialise le sous-menu ouvert lorsque le menu principal est fermé
    useEffect(() => {
        if (!isOpen) {
            setOpenSubMenuIndex(null);
        }
    }, [isOpen]);

    const variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const subMenuVariants = {
        hidden: { opacity: 0, maxHeight: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, maxHeight: 500, y: 0, scale: 1 }, // maxHeight with a value large enough to contain content
    };

    return (
        <motion.ul
            className="flex flex-col h-full justify-center items-center font-monsterrat text-2xl gap-10 font-bold"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            transition={{ staggerChildren: 0.08, duration: 0.3 }}
        >
            {menuItems.map((item, index) => (
                <motion.li
                    key={index}
                    variants={variants}
                    className="relative cursor-pointer"
                >
                    <div
                        onClick={() => item.subItems && toggleSubMenu(index)}
                        className="flex items-center justify-center uppercase"
                    >
                        {item.label}
                        {item.subItems && (
                            <ChevronDown
                                className={`relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 ${
                                    openSubMenuIndex === index
                                        ? "rotate-180"
                                        : ""
                                }`}
                                aria-hidden="true"
                            />
                        )}
                    </div>

                    {/* Sous-menu avec AnimatePresence pour gérer l'animation de fermeture */}
                    <AnimatePresence initial={false}>
                        {item.subItems && openSubMenuIndex === index && (
                            <motion.div
                                className="overflow-hidden mt-2"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={subMenuVariants}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeInOut",
                                    staggerChildren: 0.07,
                                    staggerDirection: -1,
                                }}
                            >
                                <ul className="flex flex-col items-center text-lg text-gray-400 gap-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <motion.li
                                            key={subIndex}
                                            variants={subMenuVariants}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.95,
                                                transition: {
                                                    duration: 0.25,
                                                    ease: "easeInOut",
                                                },
                                            }}
                                        >
                                            {subItem}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default AnimatedMenu;
