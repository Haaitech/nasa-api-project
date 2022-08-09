/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import axios from "axios";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import LoadingCard from "../components/LoadingCard";

const Timespan = () => {
	const [data, setData] = React.useState(null);
	const [fromDate, setFromDate] = React.useState("");
	const [toDate, setToDate] = React.useState("");
	const [detail, setDetail] = React.useState(null);
	const [search, setSearch] = React.useState(false);

	const getTimspanData = async () => {
		const dataFetch = await axios.get(
			`/api/timespanApiCall?fromDate=${fromDate}&toDate=${toDate}`
		);

		setData(dataFetch.data.data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(true);
		getTimspanData();
	};

	const emptyDataHandler = () => {
		setData(null);
		setSearch(false);
	};

	const loadInfoHandler = (index) => {
		setDetail(data[index]);
	};
	const removeInfoHandler = () => {
		setDetail(null);
	};

	return (
		<div>
			<div className="pt-28 min-h-screen w-full bg-[url('/assets/img/bg-img/timespan-bg.jpg')] bg-cover bg-center flex items-center justify-center">
				{!data && !search ? (
					<div className=" flex flex-col items-center justify-center p-10 bg-[#0000004e] text-white w-auto mx-auto rounded-2xl">
						<h1>Explore a Snippet of time!</h1>
						<form
							className="p-2 flex flex-col text-center"
							onSubmit={handleSubmit}
						>
							<p>From:</p>
							<input
								className="text-black my-2"
								type="date"
								name="from date"
								value={fromDate}
								onChange={(e) => setFromDate(e.target.value)}
							/>
							<Image
								src="/assets/icons/arrow-down.svg"
								alt="arrow"
								width={25}
								height={25}
							/>
							<p>To:</p>
							<input
								className="text-black my-2"
								type="date"
								name="to date"
								value={toDate}
								onChange={(e) => setToDate(e.target.value)}
							/>
							<button className=" p-2 my-2 bg-[#000000c9] rounded-md hover:bg-[#464646] duration-150">
								Search
							</button>
						</form>
					</div>
				) : !data && search ? (
					<LoadingCard />
				) : (
					""
				)}
				{data ? (
					<div className=" flex flex-col items-center justify-center">
						<div className=" w-[90%] md:grid md:grid-cols-layout gap-8 max-w-[1440px] m-auto pt-8">
							{data.map((data, index) =>
								data.media_type !== "image" ? (
									""
								) : (
									<SmallCard
										onClick={() => {
											loadInfoHandler(index);
										}}
										key={index}
										title={data.title}
										date={data.date}
										imgUrl={data.url}
									/>
								)
							)}
						</div>
						<div
							onClick={emptyDataHandler}
							className=" text-white rounded-xl py-2 px-5 m-5 bg-[#000214] hover:bg-[#0a0f1a] cursor-pointer"
						>
							<h1 className="text-lg">Go back</h1>
						</div>
					</div>
				) : (
					""
				)}

				{detail ? (
					<LargeCard
						onClick={removeInfoHandler}
						title={detail.title}
						date={detail.date}
						imgUrl={detail.url}
						desc={detail.explanation}
					/>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Timespan;
