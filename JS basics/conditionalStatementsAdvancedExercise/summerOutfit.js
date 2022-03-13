function summerOutfit(input) {
    let degrees = Number(input[0]);
    let dayTime = input[1];
    let outfit = '';
    let shoes = '';
    if (dayTime === "Evening" || (dayTime === "Afternoon" && degrees >= 10 && degrees <= 18) || (dayTime === "Morning" && degrees > 18 && degrees <= 24)) {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    else if ((dayTime === "Afternoon" && degrees > 18 && degrees <= 24) || (dayTime === "Morning" && degrees >= 25)) {
        outfit = "T-Shirt";
        shoes = "Sandals";
    }
    else if (dayTime === "Morning" && degrees >= 10 && degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
    }
    else if (dayTime === "Afternoon" && degrees >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["28",
"Evening"])


