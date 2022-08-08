import React from "react";
import Link from "next/link";

const Main = () => {
	return (
		<div>
			<div className=" pt-28 min-h-screen w-full bg-[url('/assets/img/bg-img/index-bg.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-center">
				<div>
					<h1 className=" text-white text-2xl sm:text-4xl md:text-5xl font-semibold px-2 md:px-4">
						Hey sky, take off your hat, I&apos;m on my way!
					</h1>
					<p className=" text-xs sm:text-sm text-white p-4">
						Valentina Tereshkova
					</p>
				</div>

				<button className=" py-4 px-16 bg-[#00042bda] rounded-xl my-16 shadow-lg shadow-[#ebebeb3c] hover:scale-105 duration-100">
					<Link href="/random">
						<a>Take me Somwhere</a>
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Main;
