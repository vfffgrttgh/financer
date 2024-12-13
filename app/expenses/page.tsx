'use server'

export default async function Expenses() {
    return (
        <>
            <h1 className="text-center text-3xl font-semibold text-white mb-10">Expenditure Basics</h1>

            <div className="flex flex-wrap justify-center">
                <div className="bg-red-300 w-fit h-fit p-3 rounded-2xl hover:bg-red-400 m-3" style={{ transition: "0.7s background-color"}}>
                    <h1 className="text-red-600 text-2xl m-3 font-semibold">Food</h1>
                    <p className="text-white text-[19px]">Spend in Groceries, like Fruits<br /> and Vegetables and Rice,<br /> Rotis when you reach ₹5,000.</p>
                </div>
                <div className="bg-green-300 w-fit h-fit p-3 rounded-2xl hover:bg-green-400 m-3" style={{ transition: "0.7s background-color"}}>
                    <h1 className="text-green-600 text-2xl m-3 font-semibold">Jobs(Piece of Advice)</h1>
                    <p className="text-white text-[19px]">Invest in High-paying jobs,<br /> and learn most-demanded skills.</p>
                </div>
                <div className="bg-blue-300 w-fit h-fit p-3 rounded-2xl hover:bg-blue-400 m-3" style={{ transition: "0.7s background-color"}}>
                    <h1 className="text-blue-600 text-2xl m-3 font-semibold">Clothes</h1>
                    <p className="text-white text-[19px]">Get some clothes on yourself.<br /> Spend for Shirts, Pajamas,<br /> Underwears and (if possible)<br /> sweaters.</p>
                </div>
            </div>
        </>
    )
}