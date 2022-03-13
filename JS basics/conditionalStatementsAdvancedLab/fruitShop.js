function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    price = 0;
        switch(day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                if (fruit==="banana"){
                    price = 2.5*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="apple"){
                    price = 1.2*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="orange"){
                    price = 0.85*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="grapefruit"){
                    price = 1.45*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="kiwi"){
                    price = 2.7*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="pineapple"){
                    price = 5.5*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="grapes"){
                    price = 3.85*quantity;
                    console.log((price).toFixed(2));
                }
                else{
                    console.log("error");
                }
                break;
            case "Saturday":
            case "Sunday":
                if (fruit==="banana"){
                    price = 2.7*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="apple"){
                    price = 1.25*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="orange"){
                    price = 0.90*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="grapefruit"){
                    price = 1.60*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="kiwi"){
                    price = 3*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="pineapple"){
                    price = 5.6*quantity;
                    console.log((price).toFixed(2));
                }
                else if (fruit==="grapes"){
                    price = 4.2*quantity;
                    console.log((price).toFixed(2));
                }
                else{
                    console.log("error");
                }
                break;
                default:{
                    console.log("error");
                }
                break;
        }
    }
fruitShop(["tomato",
"Monday",
"0.5"])


