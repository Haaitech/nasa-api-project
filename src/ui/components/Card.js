import React from "react";

const Card = ({ title, date, imgUrl, desc }) => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<h1>{title}</h1>
				<p>{date}</p>
				<div className=" rounded-3xl overflow-hidden shadow-md shadow-[#a9a9a9cb]">
					<img src={imgUrl} alt={title} />
				</div>
				<h2 className="pt-2">Description:</h2>
				<p className="py-2">{desc}</p>
			</div>
		</div>
	);
};

export default Card;
