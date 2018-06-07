const url =
	"https://pixabay.com/api/?key=9220972-14c941a191779d5f50bce3cd4&q=cars&image_type=photo&per_page=3&pretty=true";

const demo = document.getElementById("demo");

(() => {
	axios
		.get(url)
		.then((response) => {
			let image = response.data.hits[2].largeImageURL;
			console.log(image);
			displayImage(image);
		})
		.catch((err) => {
			console.log(err);
		});
})();

displayImage = (imageUrl) => {
	let picture = document.createElement("img");
	picture.setAttribute("src", imageUrl);
	picture.setAttribute("height", "200px");
	document.body.appendChild(picture);
};
