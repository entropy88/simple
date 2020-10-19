function starLover() {



    function getMoonInfo() {

        //http://www.farmsense.net/api/astro-widgets/ api adress
        let midnight = new Date();
        midnight.setDate(midnight.getDate())
        midnight.setHours(00);
        midnight.setMinutes(0);
        midnight.setMilliseconds(0);
        let timestamp = midnight.getTime() / 1000;

        let queryString = `http://api.farmsense.net/v1/moonphases/?d=${timestamp}`;
        console.log(queryString)

        let dateP = document.getElementById("date");
        let phaseP = document.getElementById("phase");
        let pictureI = document.getElementById("moonPicture");
        fetch(queryString) // Call the fetch function passing the url of the API as a parameter
            .then((resp) => resp.json())
            .then(function (resp) {
                  let moonResp = resp[0];
      
                let myMoonObj = {
                    phase: "def",
                    picture: "def"
                };
          

                switch (moonResp.Phase) {
                    case "New Moon":
                        myMoonObj.phase = "Новолуние";
                        myMoonObj.picture = "newMoon";
                        break;
                    case "Waxing Crescent":
                        myMoonObj.phase = "Изгряващ полумесец";
                        myMoonObj.picture = "waxingCrescent";
                        break;
                    case "1st Quarter":
                        myMoonObj.phase = "Първа четвърт";
                        myMoonObj.picture = "firstQuarter";
                        break;
                    case "Waxing Gibbous":
                        myMoonObj.phase = "Растяща луна";
                        myMoonObj.picture = "waxingGibbous";
                        break;
                    case "Full Moon":
                        myMoonObj.phase = "Пълнолуние";
                        myMoonObj.picture = "fullMoon";
                        break;
                    case "Waning Gibbous":
                        myMoonObj.phase = "Намаляваща луна";
                        myMoonObj.picture = "waningGibbous";
                        break;
                    case "3rd Quarter":
                        myMoonObj.phase = "Последна четвърт";
                        myMoonObj.picture = "lastQuarter";
                        break;
                    case "Waning Crescent":
                        myMoonObj.phase = "Последна четвърт";
                        myMoonObj.picture = "waningCrescent";
                        break;
                    case "Dark Moon":
                        myMoonObj.phase = "Тъмна луна";
                        myMoonObj.picture = "newMoon";
                        break;
                }


                let month = midnight.getMonth() + 1;
                //because months start from 0, duh

                dateP.innerText = `Луната на ${midnight.getDate()}/${month}`;
                phaseP.innerText = myMoonObj.phase;
                pictureI.src = `moonPhasesPictures/${myMoonObj.picture}.jpg`

            })
            .catch(function () {
                alert("нещо се обърка...")
            });
    }


    function getPictureOfTheDay() {
        let imagContainer = document.getElementById("imageContainer");
        imagContainer.innerHTML="";
        fetch("https://api.nasa.gov/planetary/apod?api_key=LDeyRWIVB8jMycR2NGj0oGn1iLbluCDfSrJzebIn") // Call the fetch function passing the url of the API as a parameter
            .then((resp) => resp.json())
            .then(function (resp) {

                let title = document.createElement("p");
                title.innerText = resp.title;
                title.className = "titleP";
                imagContainer.appendChild(title);



                if (resp.media_type == "video") {
                    let vContainer=document.createElement("div");
                    vContainer.className="video-container";
                    let iframeVid = document.createElement("iframe");
                    iframeVid.setAttribute("src", resp.url);
                    vContainer.appendChild(iframeVid);
                    imagContainer.appendChild(vContainer);

                } else {
                    let description = document.createElement("p");
                    description.innerText = "Кликнете на изображението за да го разгледате в пълна резолюция."
                    description.className = "descriptionP";
                    imagContainer.appendChild(description);
                    let imgOfTheDay = document.createElement("img");
                    imgOfTheDay.setAttribute("src", resp.url);
                    imgOfTheDay.className = "starImage";
                    imagContainer.appendChild(imgOfTheDay);
                    console.log("image appended");

                    //if response has hdurl
                    if (resp.hasOwnProperty("hdurl")) {
                        let hdurl = resp.hdurl;
                        imgOfTheDay.addEventListener("click", function () {
                            openHdImage(hdurl)
                        });
                    }
                }

                if (resp.hasOwnProperty("copyright")) {
                     let copyP = document.createElement("p");
                    copyP.innerText = `\xA9${resp.copyright}`;
                    copyP.className = "copyrightP";
                    imagContainer.appendChild(copyP);

                }
            })
            .catch(function () {
                alert("нещо се обърка...")
            });
    }


    function openHdImage(url) {
        window.open(url)
    }

    getMoonInfo();
    getPictureOfTheDay();
}