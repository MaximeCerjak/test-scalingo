import getEnv from "@/utils/getEnv";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between space-y-10">
            <div className="w-full">
                <Image
                    src={"/Banniere.png"}
                    alt={""}
                    width={3848}
                    height={1292}
                />
            </div>
            <section>
                <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold font-goodTiming text-center space-y-1 lg:space-y-3 xl:space-y-6 2xl:space-x-9">
                    <div>
                        1100m² de{" "}
                        <span className="uppercase text-blueIllusion">
                            loisirs numériques
                        </span>
                    </div>
                    <div className="uppercase">
                        <span className="text-yellowIllusion">3 types</span>{" "}
                        d'expériences VR
                    </div>
                </div>
            </section>
        </main>
    );
}
