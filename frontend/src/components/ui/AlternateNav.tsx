"use client";

import React, { useState, useEffect } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu"; // Adapter selon votre structure de fichier

// Tableau des différentes options de contenu
const contentOptions = [
    {
        title: "Séminaire",
        description:
            "Sortez du cadre du travail, plongez dans l'aventure d'un séminaire inédit !",
        href: "/seminaire",
    },
    {
        title: "EVG - EVJF",
        description:
            "Votre ami(e) fait le grand saut ? Offrez-lui un moment inoubliable.",
        href: "/evg-evjf",
    },
    {
        title: "Anniversaire",
        description: "Offrez un moment d’évasion à votre enfant ou vos amis !",
        href: "/anniversaire",
    },
    {
        title: "Team Building",
        description: "Mêlez boulot et plaisir ! Renforcez votre équipe.",
        href: "/team-building",
    },
    {
        title: "Esport",
        description:
            "Rejoignez l'arène de l'esport : affrontez, triomphez et devenez la légende !",
        href: "/esport",
    },
];

// Composant qui alterne le contenu toutes les 5 secondes avec une animation
const AlternatingNavigationMenuLink = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Index actuel du contenu
    const [fadeIn, setFadeIn] = useState(true); // Gérer l'animation d'apparition/disparition

    // Changement automatique toutes les 5 secondes
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(false); // Début de la disparition

            setTimeout(() => {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % contentOptions.length
                ); // Change l'index
                setFadeIn(true); // Fait réapparaître le nouveau contenu
            }, 500); // Durée de l'animation fade-out (1s)
        }, 3000); // Changement de contenu toutes les 5 secondes

        return () => clearInterval(intervalId); // Nettoyage de l'intervalle
    }, []);

    const { title, description, href } = contentOptions[currentIndex]; // Récupérer le contenu actuel

    return (
        <NavigationMenuLink asChild>
            <a
                href={href}
                className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-6 no-underline outline-none focus:shadow-md transition-opacity duration-1000 ease-in-out ${
                    fadeIn ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="mb-2 mt-4 text-lg font-bold">{title}</div>
                <p className="text-sm leading-tight text-white/70 ">
                    {description}
                </p>
            </a>
        </NavigationMenuLink>
    );
};

export default AlternatingNavigationMenuLink;
