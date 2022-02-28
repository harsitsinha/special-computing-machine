

var dict = {
    "India" : "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png",
    "Nepal" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/800px-Flag_of_Nepal.svg.png",
    "Bhutan" : "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
    "Japan" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/188px-Flag_of_Japan.svg.png"
};

// document.getElementById("p1").innerHTML = "you are word";
// myFunction();

// console.log(dict["India"]);


function check(id) {
    // document.getElementById(id).innerHTML = "in";
  //   document.getElementById("p1").innerHTML = buttonName;
    // console.log(id);
    var countryName = document.getElementById(id).textContent;
    document.getElementById("p1").innerHTML = countryName;
    flagLink = document.getElementById("country_flag").src;
    // console.log(dict[countryName]);
    // console.log(flagLink)
    if(dict[countryName]==flagLink){
        document.getElementById("p1").innerHTML = "you are Right!";
    }
    else{
        document.getElementById("p1").innerHTML = "you are Wrong!";

    }
    // document.getElementById("p1").innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png\">";

}

function putFlag() {
  return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/800px-Flag_of_Nepal.svg.png";
}
