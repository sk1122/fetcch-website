import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Icons } from "./icons"

const Hero = () => {
  return (
    <div className="mx-auto px-6 lg:px-8">
      <div className="max-w-8xl mx-auto text-center">
        <div className="mx-auto max-w-2xl">
          {/* pill banner */}
          <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-[#FDB658] to-[#FF5D46] p-[2px] text-sm leading-6">
            <div className="bg-dark-700 flex h-6 items-center rounded-full p-2">
              <a href="https://docs.fetcch.xyz" target="_blank">
                Learn more about the product{" "}
                <Icons.right className="ml-1 inline h-auto w-4" />
              </a>
            </div>
          </div>

          <h1 className="to-dark-200 mt-6 select-none bg-gradient-to-b from-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Unified Payments Layer for Blockchain
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We superpower wallets with our APIs & SDKs by helping them simplify their user experience by abstracting away complexities introduced by fragmentation of identities & blockchains
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://docs.fetcch.xyz" target="_blank" className="customBtn relative">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-8xl relative mx-auto flex justify-center items-center mt-12 h-fit xl:mt-24">
        <Image
          src="/wallet.png"
          width={400}
          height={400}
          className="bg-dark-700 origin-top transform-gpu rounded-xl"
          alt="App Screenshot"
        />
        <div className="from-dark-700 to-dark-700/20 absolute top-0 h-full w-full rounded-xl bg-gradient-to-t" />
        <div className="heroGradient-purple absolute top-6 left-0 -z-10 h-20 w-full lg:top-0 lg:h-[390px] lg:w-[390px]" />
        <div className="heroGradient-pink absolute top-[295px] left-0 -z-10 h-8 w-full sm:h-[220px] sm:w-[220px] lg:h-[290px] lg:w-[290px]" />
        <div className="heroGradient-pink absolute top-0 right-0 -z-10 hidden lg:block lg:h-[390px] lg:w-[390px]" />
        <div className="heroGradient-purple absolute top-[295px] right-0 -z-10 hidden lg:block lg:h-[290px] lg:w-[290px]" />
      </div>
    </div>
  )
}

export default Hero
