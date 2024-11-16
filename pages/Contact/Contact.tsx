'use client'

import SimpleButton from "@/components/Buttons/SimpleButton"

const Contact = () => {
	return (
		<>
			<div className="max-w-7xl mx-auto flex flex-row gap-5 justify-center font-code  h-40 items-center">
				<a target="_blank" rel="noopener noreferrer" href="https://calendly.com/tyagishelabh/30min">
					<SimpleButton text="Book a Call !" />
				</a>
				<SimpleButton text="Share your Vision !" />
			</div>
		</>
	)
}

export default Contact