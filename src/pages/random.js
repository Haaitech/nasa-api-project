import React from "react";
import Head from "next/head";

import Nav from "../ui/components/Nav";
import Random from "../ui/random/Random";
import Footer from "../ui/components/Footer";

const random = () => {
	return (
		<div>
			<Head>
				<title>Xplore | Random</title>
				<meta
					name="description"
					content="Find great pictures and stories about what happend in space around your bday"
				/>
			</Head>
			<Nav />
			<Random />
			<Footer />
		</div>
	);
};

export default random;
