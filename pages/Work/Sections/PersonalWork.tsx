'use client'

import ProjectCard from "@/components/Cards/ProjectCard";


const PersonalWork = () => {
	return (
		<>
			<div className="flex flex-col justify-center md:gap-16 gap-8">
				<div className="text-medium text-2xl">
					<span className="text-[#A78BF6]">#</span>personal projects
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
					<ProjectCard
						imageUrl="./images/projects/instabot.png"
						title="InstaBot"
						subtitle="Build websites & ai chatbot by text, file, links"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Figma', 'Gemini', 'Vercel Ai SDK']}
						// liveLink="https://www.redecom.in"
						learnMore="./instabot"
					/>
					<ProjectCard
						imageUrl="./images/projects/luk.png"
						title="Luk.art"
						subtitle="AI Comics & QR Code Generator"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Figma', 'LeapAi']}
						// liveLink=""
						learnMore="./luk"
					/>
					<ProjectCard
						imageUrl="./images/projects/mienai.png"
						title="Mienai"
						subtitle="An AI Online Travel Agency"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Figma', 'Openai API']}
						liveLink="https://mienai.vercel.app/"
						learnMore="./mienai"
					/>
					<ProjectCard
						imageUrl="./images/projects/arisa.png"
						title="Arisa"
						subtitle="Portfolio Template"
						skills={['Next.js', 'Typescript', 'Tailwindcss', 'Figma', 'framer-motion']}
						liveLink="https://arisa-theta.vercel.app"
						learnMore="./arisa"
					/>
					<ProjectCard
						imageUrl="./images/projects/nft.png"
						title="NFT Tracker"
						subtitle="Design Template"
						skills={['Next.js', 'Typescript', 'Tailwindcss', 'Figma', 'framer-motion']}
						liveLink="https://nft-tracker-orcin.vercel.app/"
						learnMore="./nft"
					/>
					<ProjectCard
						imageUrl="./images/projects/goba.png"
						title="Goba"
						subtitle="Design Template"
						skills={['Next.js', 'Typescript', 'Tailwindcss', 'Figma', 'framer-motion']}
						liveLink="https://goba.vercel.app"
						learnMore="./goba"
					/>
					

				</div>

			</div>
		</>
	)
}

export default PersonalWork;