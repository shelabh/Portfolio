'use client'

import Link from "next/link"




const Navbar = () => {
	return (
		<>
			<div className=" w-full font-code ">
				<div className="max-w-7xl mx-auto flex flex-row  justify-between items-center p-10 ">
					<div>
						Shelabh tyagi
					</div>
					<div className="flex flex-row items-center text-[#ABB2BF] gap-5">
						<Link href="/">
							<div className="cursor-pointer hover:text-white">
								<span className="text-[#A78BF6]">#</span>home
							</div>
						</Link>
						<Link href="/work">
							<div className="cursor-pointer hover:text-white">
								<span className="text-[#A78BF6]">#</span>work
							</div>
						</Link>
						<Link href="/about">
							<div className="cursor-pointer hover:text-white">
								<span className="text-[#A78BF6]">#</span>about-me
							</div>
						</Link>
						<Link href="/contact">
							<div className="cursor-pointer hover:text-white">
								<span className="text-[#A78BF6]">#</span>contact
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}


export default Navbar