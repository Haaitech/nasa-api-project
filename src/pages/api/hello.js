// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		name: "John Doe",
		age: 56,
		work: "plummer",
		maried: false,
		children: 1,
		quote: "Fuck off with your quote im trying to work!",
		attitude: "good",
	});
}
