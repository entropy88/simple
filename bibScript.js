//default case, document is book
let documentType = "book";
let nonPeriodicalFields = document.getElementsByClassName("nonperiodical");
let periodicalFields = document.getElementsByClassName("periodical");
let articleCompFields = document.getElementsByClassName("articleComp")
let onlineFields = document.getElementsByClassName("online");
let traditionalFields = document.getElementsByClassName("traditional");

//variables needed to hide/unhide needed/unneeded fields;
let nonPeriodicalObject = { name: "nonperiodical", arr: nonPeriodicalFields };
let periodicalObject = { name: "periodical", arr: periodicalFields };
let onlineObject = { name: "online", arr: onlineFields };
let articleCompObject = { name: "articleComp", arr: articleCompFields }
let fieldTypesArr = [nonPeriodicalObject, periodicalObject, articleCompObject, onlineObject];
//by default
let fieldType = "nonperiodical";

//get collection of the main buttons
let mainButtons = document.getElementsByClassName("buttonsMain");


//create variable for the compilator, in order to be accessed outside compilation();
let compilator = "";
//create variable for the onlineperiodical link, in order to be accessible outside onlinePeriodical();
let onlinePeriodicalLink = "";

//create variable for the online video, in order to be accessed outside of video() function;
let videoStr = "";

//get date for online records:
let today = new Date;
let dd = today.getDate();
let mm = today.getMonth() + 1; //As January is 0.
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
let dateVisited = (`${dd}/${mm}/${yyyy}`);



//create new empty array on page load
function work() {
  return bibliography = [];
}
//background img: https://www.wallpaperflare.com/artwork-green-pattern-beehive-patterns-wallpaper-268237

//main function
function getInfo() {
  let newRecord = {};

  let invertedAuthors = "";
  let oneNameAuthor=false;
  //get authors, turn them into array, invert names, join into string
  let authors = document.getElementById("authorsInput").value;
  //if any authors
  if (authors.length !== 0) {
    //if author only has one name
    if (!authors.includes(" ")){
      oneNameAuthor=true;
      console.log(oneNameAuthor)
    } else {
      //more than one author
    let authorsArr = authors.split("; ");
    let invertedAuthorsArr = [];

    authorsArr.forEach(element => {
      let [fn, sn] = element.split(" ");
      invertedAuthorsArr.push(`${sn}, ${fn}`);
    });

    invertedAuthors = invertedAuthorsArr.join(", ");
  }
}



  //get the rest of the elements
  let title = document.getElementById("titleInput").value;
  let subtitle = document.getElementById("subtitleInput").value;
  //append subtitle if any
  if (subtitle) {
    title += (`: ${subtitle}`);
  }

  //decide for the sort word
  let sortWord = "";
  if (oneNameAuthor==true){
    sortWord=authors;
    console.log(sortWord)
  }
  else {
  if (invertedAuthors.length > 0) {
    sortWord = invertedAuthors;
  } else {  
    sortWord = title;
  }
  }

//PAGES SHIT
  let pagesRaw = document.getElementById("pagesInput").value;
  let pages="";
  if (pages.includes("-")){
   pages=pagesRaw.split("-").join(" – ")
  } else {
    pages=pagesRaw;
  }
  let year = document.getElementById("yearInput").value;


  //construct the rest of the record acording to documentType
  switch (documentType) {
    case "book":
      let place = document.getElementById("placeInput").value;
      let publisher = document.getElementById("publisherInput").value;
      let isbn = document.getElementById("isbnInput").value;
      let volume = document.getElementById("volumeInput").value;

      if (volume.length > 0) {
        title += (`. T. ${volume}`);
      }

      compilator = document.getElementById("compilationInput").value;
      //add shit if compilation;
      compilation();
      if (compilator.length > 0) {
        title += (`. Състав. ${compilator}`);
      }

      newRecord = { docutype: "book", sw: sortWord, au: invertedAuthors, ttl: title, pl: place, pb: publisher, yp: year, pg: pages, identifier: isbn }
      break;

    case "article":
      let periodicalTitle = document.getElementById("periodicalInput").value;
      onlinePeriodicalLink = document.getElementById("onlinePeriodicalLinkInputField").value;
      //add shit if online periodical
      onlinePeriodical();
      if (onlinePeriodicalLink.length > 0) {
        periodicalTitle += " [онлайн]";
      }
      let issue = document.getElementById("issueInput").value;
      let issn = document.getElementById("issnInput").value;

      newRecord = {
        docutype: "article", sw: sortWord, au: invertedAuthors, ttl: title,
        pt: periodicalTitle, issue: issue, yp: year, pg: pages, identifier: issn, link: onlinePeriodicalLink,
        dv: dateVisited
      };
      break;


    case "articleComp":
      let compilationTitle = document.getElementById("compilationTitleInput").value;
      let compilationCompilator = document.getElementById("articleCompCompilatorInput").value;
      let compilationPlace = document.getElementById("articleCompPlaceInput").value;
      let compilationPublisher = document.getElementById("articleCompPublisherInput").value;
      let compISBN = document.getElementById("articleCompIsbnInput").value;
      newRecord = {
        docutype: "articleComp", sw: sortWord, au: invertedAuthors, ttl: title,
        ct: compilationTitle, cc: compilationCompilator, cpl: compilationPlace,
        cpb: compilationPublisher, yp: year, pg: pages, identifier: compISBN
      };
      break;

    case "online":
      let siteTitle = document.getElementById("siteInput").value;
      let siteAdress = document.getElementById("linkInput").value;
      //add shit if video is checked
      video();
      if (videoStr.length > 0) {
        title += videoStr;
      }

      newRecord = {
        docutype: "online", sw: sortWord, au: invertedAuthors, ttl: title,
        st: siteTitle, link: siteAdress, yp: year, dv: dateVisited
      };
      break;
  }

  //push new record
  bibliography.push(newRecord);

  //sort array
  bibliography = bibliography.sort(function (a, b) {
    if (a["sw"] !== b["sw"]) {
      return (a["sw"].localeCompare(b["sw"]));
    } else {
      return (a["ttl"].localeCompare(b["ttl"]))
    }
  });

  let bibField = document.getElementById("recordField");
  bibField.innerHTML = "Библиография:";

  //append on record field
  bibliography.forEach(element => {
    let record = "";


    //if title!==sort word, add it
    record+=element["sw"]
    if (element["ttl"]!==element["sw"]){
      record+=`. ${element["ttl"]}`
    }


    switch (element["docutype"]) {
      case "book":
        record += (`. ${element["pl"]}:
         ${element["pb"]}, ${element["yp"]}. ${element["pg"]} с. `);

        //add isbn only if there is one
        if (element["identifier"].length > 0) {
          record += (`ISBN ${element["identifier"]}`);
        }
        break;

      case "article":
        record += (`. – В: ${element["pt"]},
             бр. ${element["issue"]}, ${element["yp"]}, c. ${element["pg"]}. `);
        if (element["link"].length > 0) {
          record += (`[Прегледан ${element["dv"]}] Достъпно от: ${element["link"]}. `)
        }

        //add issn only if there is one
        if (element["identifier"].length > 0) {
          record += (`ISSN ${element["identifier"]}`);
        }
        break;

      case "articleComp":
        record += (`. – В: ${element["ct"]}. Състав. ${element["cc"]}. ${element["cpl"]}: 
       ${element["cpb"]}, ${element["yp"]}. с. ${element["pg"]}. `);
        if (element["identifier"].length > 0) {
          record += (`ISBN ${element["identifier"]}`);
        }
        break;

      case "online":
        record += (`. – В: ${element["st"]} [online].
             ${element["yp"]}. [Прегледан ${element["dv"]}]. Достъпно от: ${element["link"]}`);
        break;
    }

    console.log(element)

    let recordParagraph = document.createElement("p");
    let rec = document.createTextNode(record);
    recordParagraph.appendChild(rec);
    bibField.appendChild(recordParagraph);

  });

}

function book() {
  documentType = "book";
  let buttonId = "book";
  changeButtonApearance(buttonId);
  fieldType = "nonperiodical";
  hideFields(fieldType);
  resetInputValues();

}

function article() {
  documentType = "article";
  let buttonId = "article";
  changeButtonApearance(buttonId);
  fieldType = "periodical";
  hideFields(fieldType);
  resetInputValues();
  //get check box for online periodical, set it to unchecked
  let chBox = document.getElementById("onlinePeriodicalCheck");
  chBox.checked = false;
}

function articleComp() {
  documentType = "articleComp";
  let buttonId = "articleComp";
  changeButtonApearance(buttonId);
  fieldType = "articleComp";
  hideFields(fieldType);
  resetInputValues();

}

function online() {
  documentType = "online";
  let buttonId = "online";
  changeButtonApearance(buttonId);
  fieldType = "online";
  hideFields(fieldType);
  resetInputValues();

  let videoCheck = document.getElementById("videoCheck");
  videoCheck.checked = false;
}

function changeButtonApearance(buttonId) {
  for (let i = 0; i < mainButtons.length; i++) {
    let currentButton = mainButtons[i];
    if (currentButton["id"] !== buttonId) {
      currentButton.style.background ="whitesmoke";
    } else {
      currentButton.style.background = "#699e3c";
      currentButton.style.background="rgba(0, 0, 0, 0.4)";
    }
  }
}

function hideFields(fieldType) {
  //think about pages field here
  let pagesD = document.getElementById("allPagesD");
  if (fieldType == "online") {
    pagesD.style.display = "none";
  } else {
    pagesD.style.display = "inherit";
  }

  for (let i = 0; i < fieldTypesArr.length; i++) {
    let currentFieldTypeName = fieldTypesArr[i]["name"];
    let currentFieldTypeElements = fieldTypesArr[i]["arr"];
    if (currentFieldTypeName == fieldType) {
      for (let j = 0; j < currentFieldTypeElements.length; j++) {
        let curField = currentFieldTypeElements[j];
        curField.style.display = "inherit";
      }
    } else {
      for (let k = 0; k < currentFieldTypeElements.length; k++) {
        let curField = currentFieldTypeElements[k];
        curField.style.display = "none";
      }
    }
  }
}

function resetInputValues() {
  let allTheInputFields = document.getElementsByClassName("inputField");

  for (let i = 0; i < allTheInputFields.length; i++) {
    let currentField = allTheInputFields[i];
    currentField.value = "";
  }
  //disable optional fields
  let onlinePeriodicalLinkField = document.getElementById("onlinePeriodicalLinkInputField");
  onlinePeriodicalLinkField.disabled = true;
  let compInput = document.getElementById("compilationInput");
  compInput.disabled = true;
  //get chechBoxes and uncheck them
  let videoCheckBox = document.getElementById("videoCheck");
  let onlinePeriodicalCheckBox = document.getElementById("onlinePeriodicalCheck");
  let compCheckBox = document.getElementById("compilationCheck");
  videoCheckBox.checked = false;
  onlinePeriodicalCheckBox.checked = false;
  compCheckBox.checked = false;
}



function onlinePeriodical() {
  //get needed elements
  let onlinePeriodicalCheckBox = document.getElementById("onlinePeriodicalCheck");
  let onlinePeriodicalLinkField = document.getElementById("onlinePeriodicalLinkInputField");

  if (onlinePeriodicalCheckBox.checked == true) {
    onlinePeriodicalLinkField.disabled = false;
  } else {
    onlinePeriodicalLink = "";
    onlinePeriodicalLinkField.disabled = true;

  }
}

function video() {
  let videoCheckBox = document.getElementById("videoCheck");
  if (videoCheckBox.checked == true) {
    videoStr = " [Видео]";
  } else {
    videoStr = "";
  }
}

function compilation() {
  let compCheckBox = document.getElementById("compilationCheck");
  let compInput = document.getElementById("compilationInput");
  if (compCheckBox.checked == true) {
    compInput.disabled = false;

  }
  else {
    compInput.disabled = true;
    compInput.value = "";
    compilator = "";
  }
}


