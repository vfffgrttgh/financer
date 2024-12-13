'use client'

import React from "react"

export default function Card({ children, color }: {children: any, color: string}) {
    return (
        <div className={`w-fit h-fit p-5 m-3 rounded-2xl bg-${color}-500 hover:bg-${color}-900`} style={{ transition: "0.7s background-color"}}>
            { children }
        </div>
    )
}