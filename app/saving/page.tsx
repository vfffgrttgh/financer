'use client'

import { useEffect, useState } from "react";

export default function Saving() {
    const [amount, set] = useState<any>("");
    const [calculation, setCalc] = useState<number>(0);

    function calculate(): void {
        const abs = Math.abs(amount);

        setCalc(abs / 2);
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            console.log("Dumbo");
        } else {
            const updatedamount: string | null = localStorage.getItem("amount");

            set(updatedamount);
        };
    }, []);

    return (
        <>
            <h1 className="text-6xl font-semibold text-white text-center">{amount}</h1>

            <div className="flex flex-wrap justify-center m-10">
                <button className="bg-red-500 p-2 m-3 rounded-2xl text-white hover:bg-red-700" onClick={calculate}>Calculate Saving</button>
            </div>

            <h1 className="text-center text-4xl text-white font-bold">
                You should save atleast this much: { calculation }!
            </h1>
        </>
    );
}