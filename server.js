const express = require("express");
const app = express();

app.get("/greetings/:name", (req, res) => {
	res.send("Hello " + req.params.name);
});

app.get("/tips/:total/:tipPercentage", (req, res) => {
	let { total, tipPercentage } = req.params;

	let answer = (parseInt(total) * parseInt(tipPercentage)) / 100;
	res.send({
		total: "$" + total,
		tip_percentage: tipPercentage + "%",
		tipped_ammount: "$" + answer,
	});
});

app.listen(3000, () => {
	console.log("listening");
});
