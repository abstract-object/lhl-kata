let talkingCalendar = function(date) {
  var readableDate = "";
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var yearMonthDay = date.split("/");

  readableDate += months[Number(yearMonthDay[1] - 1)] + " ";

  if (Number(yearMonthDay[2]) - 30 > 0) {
    readableDate += "3";
  }
  else if (Number(yearMonthDay[2]) - 20 > 0) {
    readableDate += "2";
  }
  else if (Number(yearMonthDay[2]) - 10 > 0) {
    readableDate += "1";
  }


  if (Number(yearMonthDay[2]) == 1 || Number(yearMonthDay[2]) == 21 || Number(yearMonthDay[2]) == 31) {
    readableDate += "1st, ";
  }
  else if (Number(yearMonthDay[2]) == 2 || Number(yearMonthDay[2]) == 22) {
    readableDate += "2nd, ";
  }
  else if (Number(yearMonthDay[2]) == 3 || Number(yearMonthDay[2]) == 23) {
    readableDate += "3rd, ";
  }
  else {
    readableDate += Number(yearMonthDay[2][yearMonthDay[2].length - 1]) + "th, ";
  }

  readableDate += yearMonthDay[0];

  return readableDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/05/31"));
console.log(talkingCalendar("1987/08/24"));