function displayArticles(){

    let articlesArr=[];

    let articleZero={
        title: "Изобретяване и история на печатната машина", 
        text: "Ако зададем въпросa за развитието на печатната технология, мнозина биха отговорили, че началото е поставено от Гутенберг с изобретяването на печатната машина и биха сгрешили. Печатната машина на Гутенберг несъмнено е едно от най-фундаменталните открития в човешката история, предизвикало ефекта на доминото за разбиването на цензурата в стария свят и утвърдила бързото разпространение на идеи, но има много по-ранно датиращи предпоставки, без които нито машината, нито печатната индустрията биха съществували днес.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2019/09/10/%d0%b8%d0%b7%d0%be%d0%b1%d1%80%d0%b5%d1%82%d1%8f%d0%b2%d0%b0%d0%bd%d0%b5-%d0%b8-%d0%b8%d1%81%d1%82%d0%be%d1%80%d0%b8%d1%8f-%d0%bd%d0%b0-%d0%bf%d0%b5%d1%87%d0%b0%d1%82%d0%bd%d0%b0%d1%82%d0%b0-%d0%bc/"  
    }

    let articleOne={
        title: "Роберто Арлт и „Гневната играчка“", 
        text: "Романът „Гневната играчка“ от 1926 година ни отвежда по уличките на Буенос Айрес в компанията на един юноша-крадец, който се възхищава на Ницше и Достоевски. Силвио си мечтае за славата на откритията, но вместо това драска графити заедно с дребни мошеници и не успява да уталожи спомена за набързо отхвърлилата го приятелка, а на фона на всичко това, майка му му натяква да си намери работа. ",
        link: "https://gutenbergpublishinghouse.wordpress.com/2019/08/07/%d1%80%d0%be%d0%b1%d0%b5%d1%80%d1%82%d0%be-%d0%b0%d1%80%d0%bb%d1%82-%d0%b8-%d0%b3%d0%bd%d0%b5%d0%b2%d0%bd%d0%b0%d1%82%d0%b0-%d0%b8%d0%b3%d1%80%d0%b0%d1%87%d0%ba%d0%b0/"
       
    }

    let articleTwo={
        title: "проф. Александър Фол. Седем приказки за миналото на света", 
        text: "В “Седем приказки за миналото на света” Александър Фол е вплел под формата на образователни приказки историята на света от древните времена до наши дни. Той разпалва детското въображение и интерес с помощта на митове и легенди и помага на децата да научат повече за древните цивилизации и техните постижения, върху които се гради и нашето съвремие, под формата на приказка.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2018/11/30/%d1%81%d0%b5%d0%b4%d0%b5%d0%bc-%d0%bf%d1%80%d0%b8%d0%ba%d0%b0%d0%b7%d0%ba%d0%b8-%d0%b7%d0%b0-%d0%bc%d0%b8%d0%bd%d0%b0%d0%bb%d0%be%d1%82%d0%be-%d0%bd%d0%b0-%d1%81%d0%b2%d0%b5%d1%82%d0%b0-%d0%be/"
       
    }
    articlesArr.push(articleZero);
    articlesArr.push(articleOne);
    articlesArr.push(articleTwo);

    let containerDiv=document.getElementById("articlesDiv");

    for (let i=0; i<articlesArr.length; i++){
        let currArt=articlesArr[i];
        let artTitle=(`${currArt["title"]}`);
        let article= (`${currArt["text"]}`);
        let artLink=(`${currArt["link"]}`);
    



    let artParagraph = document.createElement("p");
    let art = document.createTextNode(article);

    let artTitleH=document.createElement("H2");
    let bigTitle=document.createTextNode(artTitle);    
    artTitleH.appendChild(bigTitle)

    let artA=document.createElement("a");
    let linkA=document.createTextNode(" Прочетете повече ➦");
    artA.href=artLink;
    artA.className="gutenbergLink";
    artA.target="_blank"
    artA.appendChild(linkA);

    let separatingLine=document.createElement("hr");
    
    artParagraph.appendChild(artTitleH);
    artParagraph.appendChild(art);
    artParagraph.appendChild(artA);
    artParagraph.appendChild(separatingLine);
    containerDiv.appendChild(artParagraph);

    }
}