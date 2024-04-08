import Link from "next/link";
import { getPrice } from "./function";
export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

export default async function Hero() {


  return (
    <div className="relative isolate overflow-hidden bg-orange-400">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke- stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-red-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <p className=" font-extrabold font-mono text-orange-600 text-6xl">
            $MEOW
          </p>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            WELCOME TO MEOWWWW FAM!
          </h1>
          <p className="mt-6 text-lg leading-8 text-orange-600 font-semibold">
            $MEOW is a ERC20 token created in the Zilliqa Ecosystem on 6th April
            2024
          </p>
          <p className="mt-6 text-lg leading-8 text-white font-semibold">
            {`Current Price is ${await getPrice()} ZIL per $MEOW`}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="https://twitter.com/MEOWZILLIQA"
              target="_blank"
              className="text-sm font-semibold leading-6 text-white underline"
            >
              Twitter
            </Link>
            <Link
              href="https://t.me/+Lvf8CJyAo2gzZmJl"
              target="_blank"
              className="text-sm font-semibold leading-6 text-white underline"
            >
              Telegram
            </Link>
            <Link
              href="#faq"
              className="text-sm font-semibold leading-6 text-white underline"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://plunderswap.github.io/token-lists/images/0x7F70a752E87372f4270F123bba8d86E432C7fC1D.png"
              alt="App screenshot"
              className=" lg:w-[40rem] w-[24rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
