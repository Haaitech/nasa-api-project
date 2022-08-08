/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card = ({ title, date, imgUrl, desc, onClick }) => {
	return (
		<div
			className="w-full h-[100vh] fixed top-0 left-0 flex items-center "
			onClick={onClick}
		>
			<div className=" max-w-[1440px] bg-[#01030ab9] rounded-3xl text-[#e6e6e6] w-[90%] mx-auto h-[70%] overflow-y-scroll">
				<div className=" flex flex-col items-center p-2 mx-auto w-[90%]">
					<h1 className="p-4">{title}</h1>
					<p className="pb-2">{date}</p>
					<div className=" m-2 h-[80%] w-full">
						<img
							className="rounded-2xl w-[60%] mx-auto h-[50vh] object-cover"
							src={imgUrl}
							alt={title}
						/>
					</div>
					<h2 className="p-4">Description:</h2>
					<p className="p-4 text-center">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
