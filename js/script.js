var turnips = [
  {
    "name" : "Mr. Saturn",
    "id" : "num-pigs",
    "img" : "item-pig"
  },
  {
    "name" : "Beam Sword",
    "id" : "num-lightsabers",
    "img" : "item-lightsaber"
  },
  {
    "name" : "Bomb",
    "id" : "num-bombs",
    "img" : "item-bomb"
  },
  {
    "name" : "Regular Face",
    "id" : "num-regular",
    "img" : "turnip-regular"
  },
  {
    "name" : "Tired Face",
    "id" : "num-tired",
    "img" : "turnip-tired"
  },
  {
    "name" : "Sleeping Face",
    "id" : "num-sleeping",
    "img" : "turnip-sleeping"
  },
  {
    "name" : "Shocked Face",
    "id" : "num-shocked",
    "img" : "turnip-shocked"
  },
  {
    "name" : "Laughing Face",
    "id" : "num-laughing",
    "img" : "turnip-laughing"
  },
  {
    "name" : "Winking Face",
    "id" : "num-winking",
    "img" : "turnip-winking"
  },
  {
    "name" : "Ditto Face",
    "id" : "num-ditto",
    "img" : "turnip-ditto"
  },
  {
    "name" : "Stitch Face",
    "id" : "num-stitched",
    "img" : "turnip-stitched"
  }
];

// load turnips
$(document).ready(function() {
  for (num in turnips) {
    var value = docCookies.getItem(turnips[num]["id"]);
    value = value == null ? 0 : value;
    document.getElementById(turnips[num]["id"]).innerHTML = value;
  }

  var value = docCookies.getItem("total-pulls");
  value =  value == null ? 0 : value;
  document.getElementById("total-pulls").innerHTML = value;
});

function generateTurnip() {
	var result_img = "";
	var result_name = "";

	var first_prob = Math.floor(Math.random() * 128);

	if (first_prob == 127) { // item cases
		var item_prob = Math.floor(Math.random() * 6);
		if (item_prob < 3) {
			// pig
			result_img = "item-pig";
			result_name = "Mr. Saturn";
			incrementValue("num-pigs");
		}
		else if (item_prob == 5) {
			// light saber
			result_img = "item-lightsaber";
			result_name = "Beam Sword";
			incrementValue("num-lightsabers");
		}
		else {
			// bomb
			result_img = "item-bomb";
			result_name = "Bomb";
			incrementValue("num-bombs");
		}
	}
	else { // turnip cases
		var turnip_prob = Math.floor(Math.random() * 58);
		if (turnip_prob >= 0 && turnip_prob < 35) {
			// regular turnip
			result_img = "turnip-regular";
			result_name = "Regular Face";
			incrementValue("num-regular");
		}
		else if (turnip_prob >= 35 && turnip_prob < 41) {
			result_img = "turnip-tired";
			result_name = "Tired Face";
			incrementValue("num-tired");
		}
		else if (turnip_prob >= 41 && turnip_prob < 46) {
			result_img = "turnip-sleeping";
			result_name = "Sleeping Face";
			incrementValue("num-sleeping");
		}
		else if (turnip_prob >= 46 && turnip_prob < 49) {
			result_img = "turnip-shocked";
			result_name = "Shocked Face";
			incrementValue("num-shocked");
		}
		else if (turnip_prob >= 49 && turnip_prob < 52) {
			result_img = "turnip-laughing";
			result_name = "Laughing Face";
			incrementValue("num-laughing");
		}
		else if (turnip_prob >= 52 && turnip_prob < 56) {
			result_img = "turnip-winking";
			result_name = "Winking Face";
			incrementValue("num-winking");
		}
		else if (turnip_prob == 56) {
			result_img = "turnip-ditto";
			result_name = "Ditto Face";
			incrementValue("num-ditto");
		}
		else {
			result_img = "turnip-stitched";
			result_name = "Stitch Face";
			incrementValue("num-stitched");
		}
		incrementValue("total-pulls");
	}

	document.getElementById('result-img').src = "img/" + result_img + ".png";
	document.getElementById('result-statement').innerText = "You have received " + result_name + "!";
}

function incrementValue(id)
{
    var value = parseInt(document.getElementById(id).innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).innerHTML = value;
    docCookies.setItem(id, value);
}

function resetCounts()
{
  for (num in turnips) {
    docCookies.setItem(turnips[num]["id"], 0);
    document.getElementById(turnips[num]["id"]).innerHTML = 0;
  }

  docCookies.setItem("total-pulls", 0);
  document.getElementById("total-pulls").innerHTML = 0;
}
