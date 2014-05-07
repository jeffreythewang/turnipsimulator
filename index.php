<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Peach Turnip Simulator</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<h1>Peach Turnip Simulator</h1>
	<button onclick="generateTurnip()">Pull</button>
	<div id="result">
		<img src="img/blank.png" id="result-img">
		<p id="result-statement">You have not pulled!</p>
	</div>
	<div id="log">
		<p>Stitches: <span id="num-stitches">0</span></p>
		<p>Pigs: <span id="num-pigs">0</span></p>
		<p>Bombs: <span id="num-bombs">0</span></p>
		<p>Light Sabers: <span id="num-lightsabers">0</span></p>
		<b><p>Total Pulls: <span id="total-pulls">0</span></p></b>
	</div>
	<footer>
		Formula sheet can be found <a href="http://i.imgur.com/FdSCz.png">here</a>
	</footer>
	<script src="js/script.js"></script>
</body>
</html>