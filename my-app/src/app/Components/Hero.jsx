import Link from "next/link";
import { getLogs, getPairs, getPrice, getZILprice } from "./function";
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default async function Hero() {
  const pairs = await getPairs();
  const price = await getPrice();
  const zilPrice = await getZILprice();

  return (
<div className="relative bg-orange-400 z-10">
  <div
    className="relative bg-[url('/MrFresh.png')] bg-center "
  >
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl text-center">
        <p className="font-extrabold font-mono text-center text-orange-600 text-6xl">
          $MEOW
        </p>
        <h1 className="mt-10 text-2xl font-bold tracking-tight text-center text-orange-600 sm:text-6xl">
          WELCOME TO MEOWWWW FAM!
        </h1>
        <p className="mt-6 text-lg leading-8 text-center text-orange-600 font-semibold">
          $MEOW is a ERC20 token created in the Zilliqa Ecosystem on 6th April 2024
        </p>
        <div className="text-center">
        <p className="mt-6 text-base leading-8 text-orange-600 font-semibold">
          {`Price: ${price} ZIL`}
        </p>
        <p className="text-base leading-8 text-orange-600 font-semibold">
          {`MarketCap(ZIL): ${Math.trunc(price * 6969696969)} ZIL`}
        </p>
        <p className="text-base leading-8 text-orange-600 font-semibold">
          {`MarketCap(USD): $${Math.trunc(price * 6969696969 * zilPrice)}`}
        </p>
        </div>
        <div className="mt-6 text-base leading-8 text-orange-600 font-semibold">
          Type of pairs in PlunderSwap
          {pairs}
        </div>
        <div className="flex flex-row justify-center items-center w-full">
        <div className="mt-10 flex items-center text-center gap-x-6">
          <Link
            href="https://twitter.com/MEOWZILLIQA"
            target="_blank"
            className="text-sm font-semibold leading-6 text-orange-600 underline"
          >
            Twitter
          </Link>
          <Link
            href="https://t.me/+Lvf8CJyAo2gzZmJl"
            target="_blank"
            className="text-sm font-semibold leading-6 text-orange-600 underline"
          >
            Telegram
          </Link>
        </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <img
            src="/MrFresh.png"
            alt="App screenshot"
            className="lg:w-[40rem] w-[24rem]"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
