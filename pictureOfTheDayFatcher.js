

function getPictureOfTheDay(){
    let imagContainer=document.getElementById("imageContainer")
    fetch("https://api.nasa.gov/planetary/apod?api_key=LDeyRWIVB8jMycR2NGj0oGn1iLbluCDfSrJzebIn") // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function(resp) {
        console.log(resp.url);
        console.log(imagContainer);
        let title=document.createElement("p");
        title.innerText=resp.title;
        title.className="titleP";
        imagContainer.appendChild(title);
        let imgOfTheDay=document.createElement("img");
        imgOfTheDay.setAttribute("src",resp.url);
        imgOfTheDay.className="starImage";
        imagContainer.appendChild(imgOfTheDay);
        let description=document.createElement("p");
        description.innerText=resp.explanation;
        description.className="descriptionP";
        imagContainer.appendChild(description);
 
})
.catch(function() {
  alert("Нещо се обърка...")
});
    }