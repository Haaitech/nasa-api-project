import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
	const [navOpen, setNavOpen] = useState(true);
	const navHandler = () => {
		setNavOpen(!navOpen);
	};
	return (
		<div>
			<div className=" w-full min-h-[7rem] bg-[#000214] z-50 fixed top-0 left-0 flex items-center shadow-lg shadow-[#ebebeb3c] ">
				<div className=" w-[90%] max-w-[1440px] mx-auto flex justify-between items-center">
					<Link href="/">
						<a>
							<Image
								src="/assets/img/Logo.svg"
								alt="logo"
								width={210}
								height={60}
							/>
						</a>
					</Link>
					<div className=" hidden md:block">
						<ul className="flex justify-between p-2 uppercase">
							<li className=" px-6 text-lg">
								<Link href="/birthday">
									<a className=" hover-underline">Birthday</a>
								</Link>
							</li>
							<li className=" px-6 text-lg">
								<Link href="/random">
									<a className="hover-underline">Random</a>
								</Link>
							</li>
							<li className=" px-6  text-lg">
								<Link href="/timespan">
									<a className="hover-underline">Timespan</a>
								</Link>
							</li>
						</ul>
					</div>
					<div onClick={navHandler} className=" md:hidden p-4 cursor-pointer">
						{navOpen ? (
							<AiOutlineMenu color="#fff" size={25} />
						) : (
							<AiOutlineClose color="#fff" size={25} />
						)}
					</div>
				</div>
			</div>
			<div
				className={
					navOpen
						? " fixed top-0 left-[-100%] w-full h-screen bg-[#0000006f] duration-75 ease-in md:hidden"
						: " fixed top-0 left-0 w-full h-screen bg-[#0000006f] duration-200 ease-in md:hidden"
				}
			></div>
			<div
				className={
					navOpen
						? "fixed top-28 left-[-100%]  w-[80%] sm:w-[40%] md:hidden flex flex-col items-center bg-[#000214] duration-500 ease-in-out"
						: "fixed top-28 left-0  w-[80%] md:hidden sm:w-[40%] flex flex-col items-center bg-[#000214] duration-500 ease-in-out z-40 rounded-br-2xl shadow-lg shadow-[#ebebeb3c]"
				}
			>
				<div>
					<ul className="flex flex-col justify-between p-2 uppercase">
						<li className=" p-6 text-lg">
							<Link href="/birthday">
								<a className=" hover-underline">Birthday</a>
							</Link>
						</li>
						<li className=" p-6 text-lg">
							<Link href="/random">
								<a className="hover-underline">Random</a>
							</Link>
						</li>
						<li className=" p-6  text-lg">
							<Link href="/timespan">
								<a className="hover-underline">Timespan</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
