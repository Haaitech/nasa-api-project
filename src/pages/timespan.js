import React from "react";
import Head from "next/head";

import Nav from "../ui/components/Nav";
import Timespan from "../ui/timespan/Timespan";
import Footer from "../ui/components/Footer";

const timespan = () => {
	return (
		<div>
			<Head>
				<title>Xplore | Timespan</title>
				<meta
					name="description"
					content="Find great pictures and stories about what happend in space around your bday"
				/>
			</Head>
			<Nav />
			<Timespan />
			<Footer />
		</div>
	);
};

export default timespan;
