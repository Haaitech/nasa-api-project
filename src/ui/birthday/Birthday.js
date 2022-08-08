import axios from "axios";
import React from "react";

import LargeCard from "../components/LargeCard";

const Birthday = () => {
	const [data, setData] = React.useState({});
	const [date, setDate] = React.useState("");

	const getuserData = async () => {
		const dataFetch = await axios.get(`/api/birthdayApiCall?query=${date}`);

		setData(dataFetch.data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getuserData();
	};
	return (
		<div className="pt-28 min-h-screen w-full bg-[url('/assets/img/bg-img/birthday-bg.jpg')] bg-cover bg-center flex items-center justify-center ">
			<div className="p-11 m-11 bg-[#00000085] flex flex-col items-center text-[#fff] rounded-xl">
				<h1 className="p-2">what is your birthday</h1>
				<form className="p-2 flex flex-col" onSubmit={handleSubmit}>
					<input
						className="text-black my-2"
						type="date"
						name="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
					<button className=" p-2 my-2 bg-[#000000c9] rounded-md hover:bg-[#464646] duration-150">
						Search
					</button>
				</form>
				<div>
					{data.data ? (
						<LargeCard
							title={data.data.title}
							date={data.data.date}
							imgUrl={data.data.url}
							desc={data.data.explanation}
						/>
					) : (
						""
					)}
					{data.error ? (
						<div>
							<h1>{data.error}</h1>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Birthday;
