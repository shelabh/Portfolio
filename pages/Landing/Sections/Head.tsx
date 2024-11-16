'use client'

import Link from "next/link";

const Head = () => {
	return (
		<>
			<div className="flex md:flex-row flex-col-reverse  justify-between items-center  p-10 ">
				<div className="flex flex-col items-center md:items-start text-center md:text-start gap-7 mt-10 md:mt-0">
					<div className="text-2xl">
						Shelabh is a <span className="text-[#A78BF6]">Full-Stack Web Developer</span> <br className="md:block hidden"/>and an <span className="text-[#A78BF6]">AI/ML Engineer</span>.
					</div>
					<div className="text-[#ABB2BF]">
						He crafts responsive websites and solution centric products <br className="md:block hidden"/>where technologies meet creativity
					</div>
					<Link href="/contact">
						<button className="border-[#A78BF6] border p-3 rounded-md w-max">
							Contact him !!
						</button>
					</Link>
				</div>
				<div className="flex flex-col items-center">
					<div>
						<img src="/images/head.png" draggable="false" />
					</div>
					<div className="border p-4 border-[#ABB2BF] text-[#ABB2BF] flex flex-row items-center gap-3">
						<div className="w-6 bg-[#A78BF6] text-[#A78BF6]">.</div>
						<div>
							RN - building <a href="https://monday-launch.vercel.app/" className="text-white underline-offset-2 underline">MondayLaunch</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Head;