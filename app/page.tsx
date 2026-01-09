"use client";

import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedText from "./components/AnimatedText";
import HoverCard from "./components/HoverCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <AnimatedSection className="px-6 py-32">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <AnimatedText
            text="NFT COMMUNITY"
            as="h1"
            stagger={0.05}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          />

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-400">
            A next-generation Web3 NFT collection built for community, utility,
            and long-term vision.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-purple-600
                         hover:bg-purple-700 hover:scale-105 hover:shadow-lg
                         transition-transform duration-300"
            >
              Join Community
            </a>

            <button
              onClick={() => alert("Wallet connection coming soon 🚀")}
              className="px-6 py-3 rounded-lg border border-purple-600 text-purple-400
                         hover:bg-purple-600 hover:text-white hover:scale-105
                         transition-transform duration-300"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* PROJECT OVERVIEW */}
      <AnimatedSection className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedText
            text="Project Overview"
            stagger={0.08}
            className="text-4xl font-bold"
          />

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Our NFT project is designed to bring real utility, exclusive
            benefits, and long-term value to holders through Web3 innovation and
            a strong community-driven vision.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <HoverCard className="p-8 rounded-xl bg-gray-800/40 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Utility</h3>
              <p className="text-gray-400">
                Access exclusive features, future drops, and on-chain benefits
                reserved for NFT holders.
              </p>
            </HoverCard>

            <HoverCard className="p-8 rounded-xl bg-gray-800/40 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-400">
                Join a strong and engaged Web3 community across Discord,
                Twitter, and private channels.
              </p>
            </HoverCard>

            <HoverCard className="p-8 rounded-xl bg-gray-800/40 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-400">
                Built with scalability in mind to support future Web3
                integrations and long-term growth.
              </p>
            </HoverCard>
          </div>
        </div>
      </AnimatedSection>

      {/* ROADMAP */}
      <AnimatedSection className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedText
            text="Roadmap"
            stagger={0.08}
            className="text-4xl font-bold"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A clear and transparent roadmap designed to deliver long-term value
            to our community.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              [
                "Phase 1",
                "Launch",
                "NFT launch, website release, community growth.",
              ],
              ["Phase 2", "Utility", "Holder utilities and collaborations."],
              ["Phase 3", "Expansion", "Ecosystem expansion and integrations."],
              [
                "Phase 4",
                "Governance",
                "DAO governance and community decisions.",
              ],
            ].map(([phase, title, desc]) => (
              <HoverCard
                key={phase}
                className="p-8 rounded-xl bg-gray-800/40 border border-gray-700"
              >
                <span className="text-purple-500 font-semibold">{phase}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* NFT GALLERY */}
      <AnimatedSection className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedText
            text="NFT Collection"
            stagger={0.08}
            className="text-4xl font-bold"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A preview of our exclusive NFT collection, designed with a strong
            Web3 identity and future on-chain integration in mind.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {["nft1.png", "nft2.png", "nft3.png", "nft4.png"].map((nft) => (
              <HoverCard
                key={nft}
                className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900"
              >
                <Image
                  src={`/nfts/${nft}`}
                  alt="NFT Preview"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </HoverCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* COMMUNITY */}
      <AnimatedSection className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedText
            text="Join the Community"
            stagger={0.08}
            className="text-4xl font-bold"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Connect with our community, stay updated, and be part of the future
            of this Web3 NFT project.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              ["Discord", "https://discord.com"],
              ["X (Twitter)", "https://x.com"],
              ["Telegram", "https://telegram.org"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-gray-700
                           hover:border-purple-500 hover:scale-105
                           transition-transform duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedText
            text="FAQ"
            stagger={0.08}
            className="text-4xl font-bold text-center"
          />

          <div className="mt-12 space-y-6">
            {[
              [
                "What is this NFT project about?",
                "A long-term Web3 ecosystem powered by NFTs, community, and utility.",
              ],
              [
                "How can I join the community?",
                "Join us on Discord, X (Twitter), and Telegram using the links above.",
              ],
              [
                "Is wallet connection required?",
                "Not yet. Wallet integration will be introduced in future phases.",
              ],
            ].map(([q, a]) => (
              <HoverCard
                key={q}
                className="p-6 rounded-xl bg-gray-800/40 border border-gray-700"
              >
                <h3 className="font-semibold">{q}</h3>
                <p className="mt-2 text-gray-400">{a}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NFT Community. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <a href="https://discord.com" target="_blank">
              Discord
            </a>
            <a href="https://x.com" target="_blank">
              X
            </a>
            <a href="https://telegram.org" target="_blank">
              Telegram
            </a>
          </div>

          <div className="flex gap-4 text-gray-500 text-sm">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
