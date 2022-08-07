import Head from "next/head";
import Footer from "../ui/components/Footer";
import Nav from "../ui/components/Nav";
import Main from "../ui/home/Main";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Xplore | Space a big place</title>
				<meta
					name="description"
					content="Find great pictures and stories about space and everything related"
				/>
			</Head>
			<Nav />
			<Main />
			<Footer />
		</div>
	);
}
