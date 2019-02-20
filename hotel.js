/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.


function genRand() {
    return  (Math.floor(Math.random() * (400-100) + 100))
}
  

// PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date

function offerExpires (dateObject) {
    var month, day;
    switch (dateObject.getMonth()) {
    case 0: month = "January"; break;
    case 1: month = "February"; break;
    case 2: month = "March"; break;
    case 3: month = "April"; break;
    case 4: month = "May"; break;
    case 5: month = "June"; break;
    case 6: month = "July"; break;
    case 7: month = "August"; break;
    case 8: month = "September"; break;
    case 9: month = "October"; break;
    case 10: month = "Novemeber"; break;
    case 11: month = "December"; break;
}
    switch (dateObject.getDay()) {
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
}
    var nextWeekDay = "(" + (dateObject.getDate() + 7) + " " +  month + " " + dateObject.getFullYear() + ")";
    return "OFFER EXPIRES NEXT " + day + "<br>" +   nextWeekDay
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage

var specialRateElement = document.getElementById("specialRate")
specialRateElement.innerHTML = genRand();

//create a new Date object

var date = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage

var offerEndsElement = document.getElementById("offerEnds")
offerEndsElement.innerHTML= offerExpires(date);

/*

<div id="info">
      <h2>latest hotel offer</h2>
      <div id="hotelName"></div>
      <div id="roomRate"></div>
      <div id="specialRate"></div>
      <p>room rate when you book 2 or more nights</p>
      <div id="offerEnds"></div>
    </div>
    <script src="hotel.js">  
*/