"use client";

import { motion } from "framer-motion";

const AnimatedMenu = () => {
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.ul
            className="flex flex-col h-full justify-center items-center font-monsterrat text-2xl gap-10 font-bold uppercase"
            initial="hidden"
            animate={"peer-checked" ? "visible" : "hidden"}
            variants={variants}
            transition={{ staggerChildren: 0.1 }}
        >
            {[
                "Accueil",
                "Expérience",
                "Évènements",
                "Tarifs",
                "Bon cadeau",
                "Aide",
            ].map((item, index) => (
                <motion.li key={index} variants={variants}>
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default AnimatedMenu;
