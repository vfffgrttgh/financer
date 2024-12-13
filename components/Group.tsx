import Card from "./Card"
import Image from "next/image"

export default async function Group() {
    return (
        <>
            <Card color="blue">
                <Image
                    src="/savings.webp"
                    alt=""
                    width={300}
                    height={200}
                    className="mb-4"
                />

                <a className="text-lg text-cyan-300 font-semibold" href="/saving">Saving (How much you should save)</a>
            </Card>
            <Card color="red">
                <Image
                    src="/spendings.webp"
                    alt=""
                    width={300}
                    height={200}
                    className="mb-4"
                />

                <a className="text-lg text-cyan-300 font-semibold" href="/expenses">Expenses (Where to be spent)</a>
            </Card>

            <Card color="emerald">
                <Image
                    src="/wallet.webp"
                    alt=""
                    width={300}
                    height={200}
                    className="mb-4"
                />

                <a className="text-lg text-cyan-300 font-semibold" href="/wallet">Manage and View your Wallet</a>
            </Card>
        </>
    )
}