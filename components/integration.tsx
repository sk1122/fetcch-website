"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Icons } from "./icons"
import { Button } from "./ui/button"

const features = [
  {
    name: "Simplify P2P Payments",
    description: "with Fetcch DIDs",
  },
  {
    name: "Enable Transaction Request",
    description: "with Fetcch Pull",
  },
  {
    name: "Make informed decisions to scale your wallet",
    description: "with our intiutive dashboard",
  },
]

const IntegrationSection = () => {
  const [imagePath, setImagePath] = useState("/assets/animate/1 1.png")
  let number = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if(number === 0) number = number + 1
      setImagePath(`/assets/animate/${number} 1.png`)

      number = ((number + 1) % 9)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="max-w-8xl mx-auto overflow-hidden">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="from-brand-orange to-brand-red bg-gradient-to-br bg-clip-text text-2xl font-bold uppercase leading-8 tracking-tight text-transparent">
                Integration
              </h2>
              <p className="to-dark-200 mt-2 max-w-md bg-gradient-to-b from-white bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                Seamless integration <br /> with your wallet
              </p>
              <p className="mt-6 text-lg leading-8">
              Integrate Fetcch APIs for unified, interoperable IDs for P2P payments, transaction requests and dApp interactions. Fetcch abstracts all of the blockchain complexities, improving the user experience of your wallet. Join us to drive blockchain adoption.
              </p>
              <dl className="mt-10 mb-8 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <Icons.checkCircle
                        aria-hidden="true"
                        className="text-dark-700 absolute top-1 left-1 h-6 w-6 fill-green-500"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="text-dark-100 inline">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <Button variant={"subtle"} shape="pill" size={"lg"}>
                <a href="https://docs.fetcch.xyz" target="_blank">
                  Learn More
                </a>
                <Icons.right className="ml-2 inline h-auto w-5" />
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <img
              src={imagePath}
              alt="App screenshot"
              className="duration-200 w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationSection
