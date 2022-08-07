import axios from "axios";

export default async function birthdayApiCall(req, res) {
	const {
		query: { date },
	} = req;

	const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${req.query.query}`;

	try {
		const response = await axios.get(baseUrl);
		res.status(200).json({
			data: response.data,
		});
	} catch (error) {
		res.status(200).json({
			error: error.response.data.msg,
		});
	}
}
