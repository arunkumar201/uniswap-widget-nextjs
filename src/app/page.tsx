import { UniswapWidget } from "@/components/UniswapWidget";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-900">Uniswap Widget {"@uniswap/widgets: 2.59.0 fork "}</h1>
        <p className="text-2xl text-gray-700 hover:underline">
          <Link href={"https://github.com/arunkumar201/uniswap-widget-nextjs"} target="_blank">Github Repo</Link>
        </p>
      </div>

      <UniswapWidget />
    </main>
  );
}
