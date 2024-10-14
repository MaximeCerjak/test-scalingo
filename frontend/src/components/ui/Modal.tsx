"use client";
import React from "react";
import { Modal, ModalTrigger } from "../ui/animated-modal";
import { CalendarSearch } from "lucide-react";

export function AnimatedModalDemo() {
    return (
        <Modal>
            <ModalTrigger className="bg-primary text-white flex justify-center group/modal-btn rounded-full p-6 lg:px-4 lg:py-2 lg:rounded-md">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 font-monsterrat font-bold uppercase hidden lg:flex">
                    Réserver
                </span>
                <div className="lg:-translate-x-40 lg:group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 lg:transition lg:duration-500 text-white z-20">
                    <CalendarSearch className="w-5 h-5" />
                </div>
            </ModalTrigger>
        </Modal>
    );
}
