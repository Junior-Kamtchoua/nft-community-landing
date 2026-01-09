"use client";

import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedText from "./components/AnimatedText";
{
  /* import HoverCard from "./components/HoverCard";*/
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <AnimatedSection className="px-6 py-32 flex min-h-screen flex-col items-center justify-center text-center">
        <AnimatedText
          text="NFT COMMUNITY"
          className="text-4xl md:text-7xl font-extrabold tracking-tight"
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
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
          >
            Join Community
          </a>

          <button
            onClick={() => alert("Wallet connection coming soon 🚀")}
            className="px-6 py-3 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition"
          >
            Connect Wallet
          </button>
        </div>
      </AnimatedSection>

      {/* PROJECT OVERVIEW */}
      <AnimatedSection className="px-6 py-24 bg-black">
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

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* UTILITY */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <h3 className="text-xl font-semibold mb-3 text-white">Utility</h3>
              <p className="text-gray-400">
                Access exclusive features, future drops, and on-chain benefits
                reserved for NFT holders.
              </p>
            </div>

            {/* COMMUNITY */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Community
              </h3>
              <p className="text-gray-400">
                Join a strong and engaged Web3 community across Discord,
                Twitter, and private channels.
              </p>
            </div>

            {/* VISION */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <h3 className="text-xl font-semibold mb-3 text-white">Vision</h3>
              <p className="text-gray-400">
                Built with scalability in mind to support future Web3
                integrations and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ROADMAP */}
      <AnimatedSection className="px-6 py-24 bg-black">
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

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* PHASE 1 */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <span className="text-purple-500 font-semibold">Phase 1</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Launch</h3>
              <p className="mt-2 text-gray-400 text-sm">
                NFT collection launch, website release, and community growth.
              </p>
            </div>

            {/* PHASE 2 */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <span className="text-purple-500 font-semibold">Phase 2</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Utility</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Holder utilities, collaborations, and exclusive access.
              </p>
            </div>

            {/* PHASE 3 */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <span className="text-purple-500 font-semibold">Phase 3</span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Expansion
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Ecosystem expansion and advanced Web3 integrations.
              </p>
            </div>

            {/* PHASE 4 */}
            <div
              className="
          group relative p-8 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />
              <span className="text-purple-500 font-semibold">Phase 4</span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Governance
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                DAO governance and community-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* NFT GALLERY */}
      <AnimatedSection className="px-6 py-24 bg-black">
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
              <div
                key={nft}
                className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900 hover:scale-105 transition"
              >
                <Image
                  src={`/nfts/${nft}`}
                  alt="NFT Preview"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* COMMUNITY */}
      <AnimatedSection className="px-6 py-24 bg-black">
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
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-gray-700 hover:border-purple-500 transition"
            >
              Discord
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-gray-700 hover:border-purple-500 transition"
            >
              X (Twitter)
            </a>

            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-gray-700 hover:border-purple-500 transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="px-6 py-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <AnimatedText
            text="FAQ"
            stagger={0.08}
            className="text-4xl font-bold text-center"
          />

          <div className="mt-12 space-y-6">
            {/* FAQ ITEM */}
            <div
              className="
          group relative p-6 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />

              <h3 className="font-semibold text-white">
                What is this NFT project about?
              </h3>
              <p className="mt-2 text-gray-400">
                This project focuses on building a long-term Web3 ecosystem
                powered by NFTs, community, and real utility.
              </p>
            </div>

            {/* FAQ ITEM */}
            <div
              className="
          group relative p-6 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />

              <h3 className="font-semibold text-white">
                How can I join the community?
              </h3>
              <p className="mt-2 text-gray-400">
                You can join us on Discord, X (Twitter), and Telegram using the
                links provided above.
              </p>
            </div>

            {/* FAQ ITEM */}
            <div
              className="
          group relative p-6 rounded-xl
          bg-gray-800/40
          border border-gray-700
          transition-all duration-300 ease-out
          hover:border-purple-500
          hover:bg-gray-800/70
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
          md:hover:-translate-y-1
        "
            >
              <span
                className="
            absolute left-0 top-0 h-full w-1
            bg-purple-500/0
            group-hover:bg-purple-500/80
            transition-all duration-300
          "
              />

              <h3 className="font-semibold text-white">
                Is wallet connection required?
              </h3>
              <p className="mt-2 text-gray-400">
                Wallet connection is optional at this stage and will be
                introduced in future development phases.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 py-10 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NFT Community. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <a
              href="https://discord.com"
              target="_blank"
              className="hover:text-white transition"
            >
              Discord
            </a>
            <a href="#" className="hover:text-white transition">
              X
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              className="hover:text-white transition"
            >
              Telegram
            </a>
          </div>

          <div className="flex gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
