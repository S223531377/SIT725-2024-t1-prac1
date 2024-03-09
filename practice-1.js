function changeText() {
  var nameArray = ["Daud", "Ahmad", "Qasim", "Adeel", "Arslan"];
  var number = getRandomNumberBetween(0, nameArray.length - 1);
  console.log("Index: ", number);
  document.getElementById("heading").innerHTML = nameArray[number];
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
