import Image from "next/image"
import React from "react"

const features = [
  {
    name: "Improved payment experience",
    desc: "Don’t ever use a bridge or DEX yourself again, just type Fetcch ID and send any token that you want without worrying if other party supports that!",
    image: "/assets/mockup.png"
  },
  {
    name: "Decentralized",
    desc: "Your Fetcch IDs will be truly owned by you and not by others, stored in a complete decentralized and trustless fashion!",
    image: "/assets/decentralized.png"
  },
  {
    name: "Interoperable",
    desc: "Use your Fetcch IDs on any wallet, dApp or CEX that supports FPCN!",
    image: "/assets/interoperable.png"
  },
  {
    name: "Making cross-chain flows user friendly",
    desc: "As Fetcch IDs can connect to multiple addersses from multiple chains, it is easier for dApps to create cross chain flows using these IDs",
    image: "/assets/cross-chain.png"
  },
  {
    name: "Chain agnostic",
    desc: "Your Fetcch IDs will work with any mainstream chain that is out there today!",
    image: "/assets/chain-agnostic.png"
  },
]

const FeaturesSection = () => {
  return (
    <div className="max-w-8xl mx-auto w-full pt-24 lg:pt-40">
      <h3 className="from-brand-orange to-brand-red w-full bg-gradient-to-br bg-clip-text text-center text-2xl font-bold uppercase tracking-tight text-transparent">
        Features
      </h3>
      <div className="mx-auto mt-4 w-full max-w-4xl">
        <h2 className="to-dark-200 mx-auto max-w-2xl select-none bg-gradient-to-b from-white bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Building blocks for your Wallets
        </h2>
        <p className="mt-6 text-center text-lg leading-relaxed tracking-wide">
          Fetcch enables wallets to hide blockchain complexities from their users like fragmentation of identities and blockchains, use of native token for gas, multiple transaction.
        </p>
      </div>
      {/* cards grid */}
      <div className="mt-20 grid w-full grid-cols-12 gap-4">
        {/* row 1 */}
        
        <div className="flex space-y-3 flex-col border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[508px] rounded-2xl border transition-colors duration-300 hover:opacity-100 xl:col-span-6">
          <img src={features[1].image} alt="" className="w-full rounded-2xl h-[341px]" />
          <div className="flex flex-col space-y-2 p-6 w-full text-center">
            <h1 className="text-3xl font-extrabold sm:text-3xl">{features[1].name}</h1>
            <p className="text-lg w-full">{features[1].desc}</p>
          </div>
        </div>
        <div className="flex space-y-3 flex-col border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[508px] rounded-2xl border transition-colors duration-300 hover:opacity-100 xl:col-span-6">
          <img src={features[4].image} alt="" className="w-full rounded-2xl h-[341px]" />
          <div className="flex flex-col space-y-2 p-6 w-full text-center">
            <h1 className="text-3xl font-extrabold sm:text-3xl">{features[4].name}</h1>
            <p className="text-lg w-full">{features[4].desc}</p>
          </div>
        </div>
        <div className="flex space-y-3 flex-col border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[508px] rounded-2xl border transition-colors duration-300 hover:opacity-100 xl:col-span-6">
          <img src={features[2].image} alt="" className="w-full rounded-2xl h-[341px]" />
          <div className="flex flex-col space-y-2 p-6 w-full text-center">
            <h1 className="text-3xl font-extrabold sm:text-3xl">{features[2].name}</h1>
            <p className="text-lg w-full">{features[2].desc}</p>
          </div>
        </div>
        <div className="flex space-y-3 flex-col justify-between items-between border-dark-400 bg-dark-600/50 hover:border-dark-300 col-span-full h-[508px] rounded-2xl border transition-colors duration-300 hover:opacity-100 xl:col-span-6">
          <img src={features[3].image} alt="" className="w-full rounded-2xl" />
          <div className="flex flex-col space-y-2 p-6 w-full text-center">
            <h1 className="text-3xl font-extrabold sm:text-3xl">{features[3].name}</h1>
            <p className="text-lg w-full">{features[3].desc}</p>
          </div>
        </div>
        <div className="flex justify-center items-center border-dark-400 space-x-5 bg-dark-600/50 hover:border-dark-300 col-span-full h-[508px] rounded-2xl border transition-colors duration-300 hover:opacity-100 xl:col-span-full">
          <img src={features[0].image} alt="" className="w-fit h-full" />
          <div className="flex flex-col justify-center space-y-6 ml-2">
            <h1 className="text-3xl font-extrabold sm:text-3xl">{features[0].name}</h1>
            <p className="text-lg w-[30ch]">{features[0].desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
