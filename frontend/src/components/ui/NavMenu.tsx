"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import AlternatingNavigationMenuLink from "./AlternateNav";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "ILLUSION - Aventure",
        href: "/",
        description: "Plongez dans des mondes VR immersifs !",
    },
    {
        title: "EVA - Battle & Zombies",
        href: "/",
        description:
            "Vivez des combats épiques dans une arène et/ou affrontez des hordes de zombies !",
    },
    {
        title: "WESTR - Simulation Auto",
        href: "/",
        description:
            "Montez dans votre bolide et soyez le meilleur pilote de l'Ouest !",
    },
];

const help: { title: string; href: string; description: string }[] = [
    {
        title: "CONTACT",
        href: "/",
        description: "Vous avez une question ? Contactez-nous !",
    },
    {
        title: "FAQ",
        href: "/",
        description: "Consultez notre FAQ pour plus d'informations.",
    },
    {
        title: "LOCALISATION",
        href: "/",
        description:
            "Obtenez des informations précises sur la localisation du centre.",
    },
];

export function Navigation() {
    return (
        <NavigationMenu className="font-monsterrat hidden lg:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Accueil
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Expérience</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Évènements</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <AlternatingNavigationMenuLink />
                            </li>
                            <ListItem href="/docs" title="EVG - EVJF">
                                Votre ami(e) fait le grand saut ? Offrez-lui un
                                moment inoubliable.
                            </ListItem>
                            <ListItem
                                href="/docs/installation"
                                title="Anniversaire"
                            >
                                Offrez un moment d’évasion à votre enfant ou vos
                                amis !
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title="Team Building"
                            >
                                Mêlez boulot et plaisir ! Renforcez votre
                                équipe.
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title="Séminaire"
                            >
                                Sortez du cadre du travail, plongez dans
                                l'aventure d'un séminaire inédit !
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title="Esport"
                            >
                                Rejoignez l'arène de l'esport : affrontez,
                                triomphez et devenez la légende !
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Tarifs
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Aide</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {help.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li className="font-monsterrat">
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/25 focus:bg-secondary/20",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none">
                        {title}
                    </div>
                    <p className="text-sm leading-snug text-gray-400">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
