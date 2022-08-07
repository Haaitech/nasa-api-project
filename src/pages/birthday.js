import React from "react";
import Birthday from "../ui/birthday/Birthday";
import Head from "next/head";
import Nav from "../ui/components/Nav";
import Footer from "../ui/components/Footer";

const birthday = () => {
	return (
		<div>
			<Head>
				<title>Xplore | Birthday</title>
				<meta
					name="description"
					content="Find great pictures and stories about what happend in space around your bday"
				/>
			</Head>
			<Nav />
			<Birthday />
			<Footer />
		</div>
	);
};

export default birthday;
