'use client'

import ClientWork from "./Sections/ClientWork"
import PersonalWork from "./Sections/PersonalWork"

const Work = () => {
	return (
		<>
			<div className="max-w-7xl mx-auto flex flex-col p-10   gap-20 font-code">
				<div className="flex flex-col gap-1">
					<div className="text-3xl font-semibold">
						<span className="text-[#A78BF6]">/</span>works
					</div>
					<div className=" text-[#ABB2BF]">
						List of my experience
					</div>
				</div>
				<ClientWork />
				<PersonalWork />
			</div>
		</>
	)
}

export default Work