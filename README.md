# NFT Community Landing Page

## Project Overview

This project is a modern Web3 / NFT landing page built as a Minimum Viable Product (MVP) for an NFT community.

The website serves as the main hub for presenting the NFT collection, its vision, roadmap, and community channels, with a strong focus on premium design, smooth animations, usability, and performance.

The architecture is designed to support future Web3 integrations such as wallet connection, on-chain data, and dynamic NFT galleries.

---

## Features

- Fully responsive (desktop & mobile)
- Dark, premium Web3 UI
- Scroll-based animations
- Letter-by-letter animated headings
- Micro-interactions on hover (cards & buttons)
- NFT gallery (static, on-chain ready)
- Community links (Discord, X/Twitter, Telegram)
- FAQ section
- Footer with legal information
- Optimized images using Next.js Image component

---

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Image Optimization: next/image
- Runtime: Node.js 18+

---

## Project Structure

app/
├─ components/
│ ├─ AnimatedSection.tsx
│ ├─ AnimatedText.tsx
│ └─ HoverCard.tsx
├─ page.tsx
├─ layout.tsx
public/
└─ nfts/
├─ nft1.png
├─ nft2.png
├─ nft3.png
└─ nft4.png

---

## Getting Started (Local Development)

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:3000

---

## Production Build

npm run build  
npm start

---

## Deployment

### Vercel (Recommended)

1. Push the project to a GitHub repository
2. Go to https://vercel.com
3. Import the repository
4. Click Deploy

No additional configuration is required.

---

## Web3 & Wallet Integration

Wallet integration (MetaMask / WalletConnect) is intentionally not implemented in this MVP.

The UI already includes a prepared entry point (Connect Wallet button). Wallet functionality can be added safely in a future development phase without refactoring the UI.

---

## Future Improvements

- Wallet integration (MetaMask / WalletConnect)
- Dynamic NFT gallery using on-chain data
- DAO / governance features
- API-driven roadmap and FAQ
- SEO optimization
- Multi-language support

---

## License

This project is delivered as a custom MVP for an NFT / Web3 personnal project. Usage and redistribution depend on author agreement.

---

## Author

Full-Stack Developer | React & Next.js | Node.js | Supabase | SaaS & MVP
