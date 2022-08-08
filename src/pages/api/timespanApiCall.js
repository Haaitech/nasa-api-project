import axios from "axios";

export default async function birthdayApiCall(req, res) {
	const {
		query: { fromDate, toDate },
	} = req;

	const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=${req.query.fromDate}&end_date=${req.query.toDate}`;

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
