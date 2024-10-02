import { Menu, X } from "lucide-react";
import { AnimatedModalDemo } from "./ui/Modal";
import { NavigationMenuDemo } from "./ui/NavMenu";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-black bg-opacity-50">
            <div className="max-w-layout mx-auto flex w-full gap-6 py-2 px-6">
                <div className="flex justify-center items-center lg:p-9 relative">
                    <input
                        type="checkbox"
                        id="menu-toggle"
                        className="hidden peer"
                    />

                    <Menu className="w-6 h-6 lg:hidden peer-checked:hidden cursor-pointer" />
                    <X className="w-6 h-6 lg:hidden hidden peer-checked:block cursor-pointer" />

                    <label
                        htmlFor="menu-toggle"
                        className="absolute inset-0 cursor-pointer"
                    ></label>

                    <Image
                        src={"/Icone.svg"}
                        alt={"Logo Illusion"}
                        fill
                        objectFit="contain"
                        className="hover:scale-110 transform transition duration-500 hidden lg:block"
                    />

                    <div className="fixed h-full top-16 inset-x-0 bg-black origin-top transform scale-y-0 peer-checked:scale-y-100 transition-transform duration-200 ease-in-out z-10 overflow-hidden p-10 pb-[120px]">
                        <ul className="flex flex-col h-full justify-center items-center font-monsterrat text-2xl gap-10 font-bold uppercase peer-checked:animate-slideDown animate-slideUp">
                            <li>Accueil</li>
                            <li>Expérience</li>
                            <li>Évènements</li>
                            <li>Tarifs</li>
                            <li>Bon cadeau</li>
                            <li>Aide</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 py-6 flex flex-row w-full justify-center relative">
                    <NavigationMenuDemo />
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
