const axios = require("axios");
const http = require("http");

const url =
	"https://pixabay.com/api/?key=9220972-14c941a191779d5f50bce3cd4&q=cars&image_type=photo&per_page=3&pretty=true";

const getPicture = () => {
	return new Promise((res, rej) => {
		axios
			.get(url)
			.then((response) => {
				resolve(response.data.hits[0].largeImageURL);
				// console.log(picture);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

const server = http.createServer((req, res) => {
	console.log("Request made:", req.url);
	let image = getPicture();
	console.log(image);
});

server.listen(9000, () => {
	console.log("Server listening on port 9000");
});
