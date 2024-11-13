'use client'

const Head = () => {
	return (
		<>
			<div className="flex flex-row  justify-between items-center  p-10 ">
				<div className="flex flex-col gap-7">
					<div className="text-2xl">
						Shelabh is a <span className="text-[#A78BF6]">Full-Stack Web Developer</span> <br/>and an <span className="text-[#A78BF6]">AI/ML Engineer</span>.
					</div>
					<div className="text-[#ABB2BF]">
						He crafts responsive websites and solution centric products <br/>where technologies meet creativity
					</div>
					<button className="border-[#A78BF6] border p-3 rounded-md w-max">
						Contact him !!
					</button>
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