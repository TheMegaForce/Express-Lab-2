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

app.get("/magic/:sentence", (req, res) => {
	let ball = [
		"It is certain",
		"It is decidedly so",
		"Without a doubt",
		"Yes definitely",
		"You may rely on it",
		"As I see it yes",
		"Most likely",
		"Outlook good",
		"Yes",
		"Signs point to yes",
		"Reply hazy try again",
		"Ask again later",
		"Better not tell you now",
		"Cannot predict now",
		"Concentrate and ask again",
		"Don't count on it",
		"My reply is no",
		"My sources say no",
		"Outlook not so good",
		"Very doubtful",
	];
	let randBall = ball[Math.floor(Math.random() * ball.length)];
	res.send(req.params.sentence + "?" + `<h1>` + randBall + `</h1>`);
});

app.listen(3000, () => {
	console.log("listening");
});
