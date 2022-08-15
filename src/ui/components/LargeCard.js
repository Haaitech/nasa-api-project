/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ title, date, imgUrl, desc, onClick }) => {
	return (
		<div className="w-full h-[100vh] fixed top-0 left-0 flex items-center justify-center ">
			<div className=" relative max-w-[780px] bg-[#01030ae1] rounded-3xl text-[#e6e6e6] w-[90%] lg:w-[60%] mx-auto mt-28 h-[85%] overflow-y-scroll scrollbar-thin">
				<div
					onClick={onClick}
					className=" absolute top-10 right-10 hover:scale-110 cursor-pointer"
				>
					<AiOutlineClose color="#fff" size={25} />
				</div>
				<div className=" flex flex-col items-center p-2 mx-auto w-[90%]">
					<h1 className="p-4">{title}</h1>
					<p className="pb-2">{date}</p>
					<div className=" m-2 h-[80%] w-full">
						<img
							className="rounded-2xl w-[90%] mx-auto h-[40vh] object-cover"
							src={imgUrl}
							alt={title}
						/>
					</div>
					<h2 className="p-4 ">Description:</h2>
					<p className="p-4 w-[90%] text-center">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
