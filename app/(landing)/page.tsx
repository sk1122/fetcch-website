import FeaturesSection from "@/components/features"
import Hero from "@/components/hero"
import IntegrationSection from "@/components/integration"
import SiteFooter from "@/components/site-footer"
import Link from "next/link"
import React from "react"

const LandingPage = () => {
  return (
    <div className="relative pb-12 pt-24 sm:pt-32 lg:pb-16">
      <Hero />
      {/* feature section */}
      <FeaturesSection />
      {/* Integration Section */}
      <IntegrationSection />
      {/* onboarding */}
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="to-dark-200 mx-auto max-w-3xl bg-gradient-to-b from-white bg-clip-text text-3xl font-extrabold text-transparent lg:text-6xl">
          Ready to take your wallet to the next level?
        </h2>
        <p className="text-dark-100 mx-auto mt-6 max-w-lg text-xl leading-6 tracking-wide">
          Maximize your wallet&apos;s potential with our world class API solution designed to make web3 simple and accessible to everyone.
          Integrate it right now.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://docs.fetcch.xyz" className="customBtn relative">
            Get Started
          </a>
        </div>
      </div>
      {/* footer */}
      <SiteFooter />
    </div>
  )
}

export default LandingPage
