function generateTurnip() {
	var result_img = "";
	var result_name = "";

	var first_prob = Math.floor(Math.random() * 128);

	if (first_prob == 127) { // item cases
		var item_prob = Math.floor(Math.random() * 6);
		if (item_prob < 3) {
			// pig
			result_img = "item-pig";
			result_name = "Pig";
		}
		else if (item_prob == 5) {
			// light saber
			result_img = "item-lightsaber";
			result_name = "Light Saber";
		}
		else {
			// bomb
			result_img = "item-bomb";
			result_name = "Bomb";
		}
	}
	else { // turnip cases
		var turnip_prob = Math.floor(Math.random() * 58);
		if (turnip_prob >= 0 && turnip_prob < 35) {
			// regular turnip
			result_img = "turnip-regular";
			result_name = "Regular Turnip";
		}
		else if (turnip_prob >= 35 && turnip_prob < 41) {
			result_img = "turnip-tired";
			result_name = "Tired Turnip";
		}
		else if (turnip_prob >= 41 && turnip_prob < 46) {
			result_img = "turnip-sleeping";
			result_name = "Sleeping Turnip";
		}
		else if (turnip_prob >= 46 && turnip_prob < 49) {
			result_img = "turnip-shocked";
			result_name = "Shocked Turnip";
		}
		else if (turnip_prob >= 49 && turnip_prob < 52) {
			result_img = "turnip-laughing";
			result_name = "Laughing Turnip";
		}
		else if (turnip_prob >= 52 && turnip_prob < 56) {
			result_img = "turnip-winking";
			result_name = "Winking Turnip";
		}
		else if (turnip_prob == 56) {
			result_img = "turnip-ditto";
			result_name = "Ditto Turnip";
		}
		else {
			result_img = "turnip-stitched";
			result_name = "Stitched Turnip";
		}
	}

	document.getElementById('result-img').src = "img/" + result_img + ".png";
	document.getElementById('result-statement').innerText = "You have received " + result_name + " !";
}