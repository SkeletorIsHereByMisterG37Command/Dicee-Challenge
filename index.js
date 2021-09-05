window.onload = function() {
  document.getElementsByClassName("hide_players")[0].style.display = "none";
  document.getElementsByClassName("hide_players")[1].style.display = "none";
}


document.getElementsByTagName("img")[0].src = "images/dice6.png";
document.getElementsByTagName("img")[1].src = "images/dice6.png";


function my_function() {

  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.getElementsByTagName("img")[0].src = randomImageSource1;
  document.getElementsByTagName("img")[1].src = randomImageSource2;

  document.getElementsByClassName("hide_players")[0].style.display = "block";
  document.getElementsByClassName("hide_players")[1].style.display = "block";


  // Show won won, or declare a draw
  if (randomNumber1 === randomNumber2) {
    document.getElementsByTagName("h1")[0].style.direction = "rtl";
    document.getElementsByTagName("h1")[0].innerHTML = "תיקו!!!";
    document.getElementById("my_button").style.direction = "rtl";
    document.getElementById("my_button").innerHTML = "תגובת אורי ויקיר: תיקו?! אין מצב!! בואו נשחק שוב!!!";
  } else if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].style.direction = "rtl";
    document.getElementsByTagName("h1")[0].innerHTML = "אורי ניצח!!!";
    document.getElementById("my_button").style.direction = "rtl";
    document.getElementById("my_button").innerHTML = "תגובת יקיר: בואנ'ה אורי הזה נוכל!!! בואו נשחק שוב!!!";
  } else {
    document.getElementsByTagName("h1")[0].style.direction = "rtl";
    document.getElementsByTagName("h1")[0].innerHTML = "יקיר ניצח!!!";
    document.getElementById("my_button").style.direction = "rtl";
    document.getElementById("my_button").innerHTML = "תגובת אורי: זה אייל אשם הוא בנה את האתר!!! בואו נשחק שוב!!!";
  }

}
