//let today = new Date().getDay();
let message = document.getElementById("message");
let day = document.getElementById("addDay");

const d = new Date();
day = d.getDay();

// day=+0

switch (day) {
    case 0:
      day = "Sunday";
      lunch = "nothing"
      break;
    case 1:
      day = "Monday";
      lunch = "Ham and potatoes"
      break;
    case 2:
       day = "Tuesday";
       lunch = "Lasagna"
      break;
    case 3:
      day = "Wednesday";
      lunch = "Pad Thai"
      break;
    case 4:
      day = "Thursday";
      lunch = "Soup and pancakes"
      break;
    case 5:
      day = "Friday";
      lunch = "Chicken tikka masala"
      break;
    case 6:
      day = "Saturday";
      lunch = "nothing"
  }
  
  message.innerHTML = `Today is ${day} and we are serving ${lunch} for lunch`

  console.log(`Today is ${day} and we are serving ${lunch} for lunch`);