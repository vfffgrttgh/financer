'use client'

import { useState, FormEvent, useEffect } from "react";
import { POST, GET } from "../backend";

export default function Wallet() {
    // STATE MANAGEMENT
    const [id, setId] = useState<string>("amount");
    const [money, setMoney] = useState<string>();
    const [amount, set] = useState<string | null>("");

    // DATA
    const google_calculate: string = "https://www.google.com/search?q=google+calculator&rlz=1C1CHBF_enIN989IN989&oq=google+cal&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDQgBEAAYkQIYgAQYigUyDQgCEAAYkQIYgAQYigUyCggDEAAYsQMYgAQyDQgEEAAYkQIYgAQYigUyBwgFEAAYgAQyBggGEEUYOTIGCAcQBRhA0gEIMzY2OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
    const transition: object = { transition: "0.7s background-color" }

    useEffect(() => {
        if(typeof window === "undefined") {
            console.log("Dumbo");
        } else {
            const updatedamount: string | null = localStorage.getItem(id);

            set(updatedamount);
        };
    }, [])

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        POST({ id: id, value: money });
    };

    return (
        <>
            <h1 className="text-7xl text-center m-10 text-white font-bold">₹{amount}</h1>

            <div className="flex flex-wrap justify-center m-10">
                <form method="post" onSubmit={handleSubmit} className="bg-amber-500 p-5 w-fit h-fit rounded-2xl">
                    <h1>Set Amount</h1>
                    <input
                        type="text"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        className="overflow-hidden mb-5 rounded-lg p-3"
                    /><br />
                    <input
                        type="number"
                        value={money}
                        onChange={e => setMoney(e.target.value)}
                        className="overflow-hidden mb-5 rounded-lg p-3"
                    /><br />
                    <button type="submit" className="text-white bg-red-500 p-3 rounded-2xl">Submit</button>
                </form>
            </div>

            <h1 className="text-white text-3xl font-semibold text-center">Want to do calculations?</h1>

            <div className="flex flex-wrap justify-center">
                <a href={google_calculate} className="bg-green-500 p-2 m-3 rounded-xl text-white hover:bg-green-700" style={transition}>Google Calculator</a>
                <a href="https://chatgpt.com" className="bg-blue-500 p-2 m-3 rounded-xl text-white hover:bg-blue-700" style={transition}>ChatGPT</a>
            </div>
        </>
    );
};
