function changeImage() {
    // document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1280px-Flag_of_Nepal.svg.png";
    // document.getElementById("img").src = img.src.replace("https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1280px-Flag_of_Nepal.svg.png");
    // alert("hello");
    let img = document.querySelector('img');
    img.addEventListener('click',()=> {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1280px-Flag_of_Nepal.svg.png";
    })
}