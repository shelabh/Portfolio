'use client'

import ProjectCard from "@/components/Cards/ProjectCard"


const ClientWork = () => {
	return (
		<>
			<div className="flex flex-col justify-center md:gap-16 gap-8">
				<div className="text-medium text-2xl">
					<span className="text-[#A78BF6]">#</span>client-work & internships
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
					<ProjectCard
						imageUrl="./images/projects/wedme-ai.png"
						title="Wedme.ai"
						subtitle="AI Wedding Planner"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Figma']}
						liveLink="https://wedmeai.vercel.app"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/redecom.png"
						title="Redecom"
						subtitle="Business Consulting"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Figma']}
						liveLink="https://www.redecom.in"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/advocateally.png"
						title="Advocateally"
						subtitle="ChatGPT for lawyers"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Openai API']}
						// liveLink="https://chertnodes.ru"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/clippr-studio.png"
						title="Clippr.studio"
						subtitle="AI video clipping tool"
						skills={['Next.js', 'Typescript', 'Tailwindcss', 'Figma']}
						liveLink="https://www.clippr.studio"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/redoc.png"
						title="Redoc.ai"
						subtitle="Write content with ai like human "
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Openai API']}
						liveLink="https://redoc.ai"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/chatbud.png"
						title="Chatbud.ai"
						subtitle="Create ai chatbots with custom data"
						skills={['Next.js', 'Supabase', 'Typescript', 'Tailwindcss', 'Openai API']}
						// liveLink="https://chertnodes.ru"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/wrky.png"
						title="Wrky.ai"
						subtitle="Talent Intelligence Platform to discover hidden potentials."
						skills={['Next.js', 'Python', 'Typescript', 'Tailwindcss', 'Django', 'Figma']}
						// liveLink="https://chertnodes.ru"
						learnMore=""
					/>
					<ProjectCard
						imageUrl="./images/projects/plutope.png"
						title="Plutope"
						subtitle="Crypto Payment Solution with plutope coin"
						skills={['Next.js', 'Typescript', 'Tailwindcss', 'Figma']}
						// liveLink="https://chertnodes.ru"
						learnMore=""
					/>

				</div>

			</div>
		</>
	)
}

export default ClientWork