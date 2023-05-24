var cards = [  {id:1 ,image:"assets\images\7.jpeg" , title: "EGYPT TANGBIA", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },  
{id:2 ,image:"assets\images\5.jpeg" ,title: "OLLING PHISOTIP", content: "Nullam nec libero eget mi euismod tincidunt." },  
{id:3 ,image:"assets\images\9.jpeg" , title: "CORTIA DYNA", content: "Sed ac arcu sit amet nunc laoreet pretium." },
{id:4 ,image:"assets\images\12.jpeg" , title: "SYSNE OF DUBAI", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },  
{id:5 ,image:"assets\images\3.jpeg" , title: "EGYPT TANGBIA", content: "Nullam nec libero eget mi euismod tincidunt." },  
{id:6 ,image:"assets\images\6.jpeg" , title: "OLLING PHISOTIP", content: "Sed ac arcu sit amet nunc laoreet pretium." },
{id:7 ,image:"assets\images\8.jpeg" , title: "CORTIA DYNA", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },  
{id:8, image:"assets\images\10.jpeg" , title: "SYSNE OF DUBAI", content: "Nullam nec libero eget mi euismod tincidunt." },  
{id:9 ,image:"assets\images\2.jpeg" , title: "EGYPT TANGBIA", content: "Sed ac arcu sit amet nunc laoreet pretium." },
{id:10 ,image:"assets\images\4.jpeg" , title: "OLLING PHISOTIP", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },  
{id:11 ,image:"assets\images\1.jpeg", title: "CORTIA DYNA", content: "Nullam nec libero eget mi euismod tincidunt." },  
{id:12, image:"assets\images\11.jpeg", title: "SYSNE OF DUBAI", content: "Sed ac arcu sit amet nunc laoreet pretium." }];

debugger
for (var i = 0; i < cards.length; i++) {
    var card = document.createElement("div");
    card.className = "card-wrapper";
    debugger
    card.innerHTML = "<img src'"+ cards[i].image + "'><h5>" + cards[i].title + "</h5><p>" + cards[i].content + "</p>";
    card.onclick = function() {
      var popup = window.open("", "pop-up", "width=400,height=400");
      var popupCard = document.createElement("div");
      popupCard.className = "card";
      popupCard.innerHTML = this.innerHTML;
      popup.document.body.appendChild(popupCard);
    };
    var column = document.createElement('div');
    column.className="col-md-3 text-align-center";
    column.append(card);
    document.getElementsByClassName("row row1")[0].append(column);
  }


//function openPopup() {
  //var popup = window.open("https://www.example.com", "pop-up", "width=400,height=400");
//var closeButton = document.createElement("button");
 // closeButton.innerHTML = "Close";
 // closeButton.style.position = "absolute";
 // closeButton.style.top = "0";
 // closeButton.style.right = "0";
 // closeButton.onclick = function() {
 //   popup.close();
 // };
 // popup.document.body.appendChild(closeButton);
//}

