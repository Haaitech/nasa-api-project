import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import SmallCard from "../components/SmallCard";
import LoadingCard from "../components/LoadingCard";
import LargeCard from "../components/LargeCard";

const Random = () => {
	const [data, setData] = React.useState(null);
	const [detail, setDetail] = React.useState(null);

	useEffect(() => {
		getRandomData();
	}, []);

	const getRandomData = async () => {
		const dataFetch = await axios.get(`/api/randomApiCall`);

		setData(dataFetch.data.data);
	};

	const loadInfoHandler = (index) => {
		setDetail(data[index]);
	};
	const removeInfoHandler = () => {
		setDetail(null);
	};

	return (
		<div className="py-28 min-h-screen w-full bg-[url('/assets/img/bg-img/random-bg.jpg')] bg-cover bg-center ">
			<div className=" w-[90%] md:grid md:grid-cols-layout gap-8 max-w-[1440px] m-auto pt-8">
				{data ? (
					data.map((data, index) =>
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
					)
				) : (
					<LoadingCard />
				)}
			</div>
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
	);
};

export default Random;
