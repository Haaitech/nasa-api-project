import React from "react";

const LoadingCard = () => {
	return (
		<div className="flex flex-col items-center justify-center p-2 bg-[#01030a93] rounded-3xl w-[50%] m-auto text-center">
			<h1 className=" text-white py-10">Loading interesting Data....</h1>
			<div>
				<div className=" my-5 border-[7px] rounded-full border-blue-900 border-t-teal-600 h-8 w-8 animate-spin"></div>
			</div>
		</div>
	);
};

export default LoadingCard;
