/* eslint-disable @next/next/no-img-element */

import React from "react";

const SmallCard = ({ title, date, imgUrl, onClick }) => {
	return (
		<div onClick={onClick}>
			<div className=" m-2 p-2 bg-[#3b3c49c4] rounded-2xl flex flex-col justify-center items-center cursor-pointer hover:bg-[#3b3c49de]">
				<div className=" m-2 h-[80%] w-full">
					<img
						className=" rounded-2xl w-[90%] mx-auto h-[40vh] object-cover"
						src={imgUrl}
						alt={title}
					/>
				</div>
				<h2 className=" text-[#e6e6e6] text-2xl">{title}</h2>
				<p className="text-[#e6e6e6]">{date}</p>
			</div>
		</div>
	);
};

export default SmallCard;
