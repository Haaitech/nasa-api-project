import React from "react";
import Image from "next/image";

import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaGithubSquare,
	FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<div className=" w-full min-h-[7rem] bg-[#000214] z-50 top-0 left-0 flex items-center shadow-inner shadow-[#ebebeb3c]">
				<div className=" w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">
					<a
						href="https://tom-haaima.nl/"
						target="_blank"
						rel="noreferrer"
						className=" pt-3 md:p-1 flex flex-col justify-center items-center"
					>
						<Image
							src="/assets/img/shark-white.svg"
							alt="logo"
							width={180}
							height={50}
						/>
						<p className=" text-[#bababa] text-xs">- Tom Haaima -</p>
					</a>

					<div>
						<ul className="flex justify-between py-2">
							<li className=" px-4 md:px-6 text-lg">
								<a
									href="https://www.facebook.com/thaaima/"
									target="_blank"
									rel="noreferrer"
								>
									<div className=" bg-[#00024186] p-1 rounded-md hover:scale-105 duration-75 ease-in-out ">
										<FaFacebookSquare color="#e5e4e4" size={30} />
									</div>
								</a>
							</li>
							<li className=" px-4 md:px-6 text-lg">
								<a
									href="https://www.instagram.com/tomhaaima/"
									target="_blank"
									rel="noreferrer"
								>
									<div className=" bg-[#00024186] p-1 rounded-md hover:scale-105 duration-75 ease-in-out ">
										<FaInstagramSquare color="#e5e4e4" size={30} />
									</div>
								</a>
							</li>
							<li className=" px-4 md:px-6 text-lg">
								<a
									href="https://www.linkedin.com/in/tom-haaima-657679127/"
									target="_blank"
									rel="noreferrer"
								>
									<div className=" bg-[#00024186] p-1 rounded-md hover:scale-105 duration-75 ease-in-out ">
										<FaLinkedin color="#e5e4e4" size={30} />
									</div>
								</a>
							</li>
							<li className=" px-4 md:px-6 text-lg">
								<a
									href="https://github.com/Haaitech"
									target="_blank"
									rel="noreferrer"
								>
									<div className=" bg-[#00024186] p-1 rounded-md hover:scale-105 duration-75 ease-in-out ">
										<FaGithubSquare color="#e5e4e4" size={30} />
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
