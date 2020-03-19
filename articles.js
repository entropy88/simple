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
        title: "36 години в заточение – писателката Роса Часел", 
        text: "Роса Часел (1898 – 1994) днес се счита за една от най-значимите испански писателки от XX в., макар и дълги години да е била напълно непозната в собствената си страна. Обаче през последните години на своя бурен живот, който понякога прилича повече на безкраен низ от приключения, тя неизменно била поставяна в редиците на най-оригиналните и самобитни мислители и активно присъствала в новините.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/14/36-%d0%b3%d0%be%d0%b4%d0%b8%d0%bd%d0%b8-%d0%b2-%d0%b7%d0%b0%d1%82%d0%be%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d0%b8%d1%81%d0%b0%d1%82%d0%b5%d0%bb%d0%ba%d0%b0%d1%82%d0%b0-%d1%80%d0%be%d1%81%d0%b0/"
       
    }

    let articleThree={
        title: "проф. Александър Фол. Седем приказки за миналото на света", 
        text: "В “Седем приказки за миналото на света” Александър Фол е вплел под формата на образователни приказки историята на света от древните времена до наши дни. Той разпалва детското въображение и интерес с помощта на митове и легенди и помага на децата да научат повече за древните цивилизации и техните постижения, върху които се гради и нашето съвремие, под формата на приказка.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2018/11/30/%d1%81%d0%b5%d0%b4%d0%b5%d0%bc-%d0%bf%d1%80%d0%b8%d0%ba%d0%b0%d0%b7%d0%ba%d0%b8-%d0%b7%d0%b0-%d0%bc%d0%b8%d0%bd%d0%b0%d0%bb%d0%be%d1%82%d0%be-%d0%bd%d0%b0-%d1%81%d0%b2%d0%b5%d1%82%d0%b0-%d0%be/"
       
    }
    let articleFour={
        title: "100-годишната книжарница, която се превърна в туристическа забележителност", 
        text: "Някога „Шекспир и сие“, тази хаотично подредена книжарница, е била пристан за неопитни писатели модернисти – днес тя е легенда и пътешествениците могат да пренощуват в нея, стига да напишат автобиография.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/01/31/100-%d0%b3%d0%be%d0%b4%d0%b8%d1%88%d0%bd%d0%b0%d1%82%d0%b0-%d0%ba%d0%bd%d0%b8%d0%b6%d0%b0%d1%80%d0%bd%d0%b8%d1%86%d0%b0-%d0%bf%d1%80%d0%b5%d0%b2%d1%8a%d1%80%d0%bd%d0%b0%d0%bb%d0%b0-%d1%81%d0%b5/"
       
    }
 

    let articleFive={
        title: "Философският роман „Господин Тест“", 
        text: "Философският роман „Господин Тест“ най-напред започва да се появява (с разказа „Вечерта с господин Тест“) в списанието Le Centaur, издавано в Париж от Пол Валери и няколко негови приятели, между които Андре Жид и Пиер Луис. Читателите на тази история първоначално били малцина.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/13/%d1%84%d0%b8%d0%bb%d0%be%d1%81%d0%be%d1%84%d1%81%d0%ba%d0%b8%d1%8f%d1%82-%d1%80%d0%be%d0%bc%d0%b0%d0%bd-%d0%b3%d0%be%d1%81%d0%bf%d0%be%d0%b4%d0%b8%d0%bd-%d1%82%d0%b5%d1%81%d1%82/"
    }

    let articleSix={
        title: "Великолепният – Лоренцо де Медичи", 
        text: "Лоренцо де Медичи (1 януари, 1449 г. – 9 април, 1492 г.) е бил италиански държавник и на практика управник на Флорентинската република. Той е бил сред най-влиятелните и деятелни меценати през Ренесанса. Познат още и като Лоренцо Великолепни сред съвременните флорентинци, той е бил магнат, дипломат, политик и меценат на учени, художници и поети. ",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/07/%d0%b2%d0%b5%d0%bb%d0%b8%d0%ba%d0%be%d0%bb%d0%b5%d0%bf%d0%bd%d0%b8%d1%8f%d1%82-%d0%bb%d0%be%d1%80%d0%b5%d0%bd%d1%86%d0%be-%d0%b4%d0%b5-%d0%bc%d0%b5%d0%b4%d0%b8%d1%87%d0%b8/"
    }
    let articleSeven={
        title: "Да разходиш кокошките – мексиканската писателка Елена Понятовска", 
        text: "Преди Елена Понятовска да има възможността да интервюира за пръв път  Хосефина Борхес, втората я накарала да сложи каишки на петте ѝ кокошки и да ги изведе на разходка. В Мексико, страна залята от социално неравенство, Борхес се смятала за силна като Понятовска – та образованата ѝ съзаклятничка дори не можела да разходи няколко кокошки.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/21/%d0%b4%d0%b0-%d1%80%d0%b0%d0%b7%d1%85%d0%be%d0%b4%d0%b8%d1%88-%d0%ba%d0%be%d0%ba%d0%be%d1%88%d0%ba%d0%b8%d1%82%d0%b5-%d0%bc%d0%b5%d0%ba%d1%81%d0%b8%d0%ba%d0%b0%d0%bd%d1%81%d0%ba%d0%b0%d1%82%d0%b0/"
    }
    let articleEight={
        title: "Емил Верхарн. Пламъци над календара", 
        text: "Емил Верхарн (1855-1916) е белгийски поет, който е пишел на френски език, както и един от основоположниците на направлението на символизма. Гъвкавото слово на този белгиец е будило възхищение в не един от великите му съвременници, сред които могат да се откроят: Райнер Мария Рилке, Андре Жид, Морис Метерлинк, Огюст Роден, Стефан Цвайг, Валерий Брюсов и др",
        link: "https://gutenbergpublishinghouse.wordpress.com/2017/02/27/featured-content/"
    }

    let articleNine={
        title: "Мариана Малинова Тиен. Българо-китайски отношения в съвременния период", 
        text: "Проблематиката в тази монография, която се представя за пръв път в българската историография като обобщаващ труд, е подчинена на различни аспекти, разкриващи характера, същността, ролята и въздействието на отношенията между България и Китайската народна република.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2017/02/27/blog-post-title-3/"
    }
    articlesArr.push(articleZero);
    articlesArr.push(articleOne);
    articlesArr.push(articleTwo);
    articlesArr.push(articleThree);
    articlesArr.push(articleFour);
    articlesArr.push(articleFive);
    articlesArr.push(articleSix);
    articlesArr.push(articleSeven);
    articlesArr.push(articleEight);
    articlesArr.push(articleNine);

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