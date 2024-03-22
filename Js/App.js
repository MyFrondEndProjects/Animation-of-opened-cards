const card1=document.querySelector(".card1");
const card2=document.querySelector(".card2");
const card3=document.querySelector(".card3");
const card4=document.querySelector(".card4");
const cardcontainer=document.querySelector(".cardcontainer");


let geridon=document.createElement("button");
geridon.style.position="absolute";
geridon.style.right="25%";
geridon.style.top="5%";
geridon.textContent="Tekrar kart seç";
geridon.style.width="5em";
geridon.style.height="3em";
geridon.style.backgroundColor="White";
geridon.style.color="Green";
geridon.style.borderRadius="0.5em";

let cards1 = document.createElement("div");


const cardarray=[card1,card2,card3,card4];



for(let i=0; i<cardarray.length; i++)
{
    

 const cardopen=() => 
 {
  
    if(cardarray[i].classList=="card1")
    {
  
     cards1.classList.add("card");
     cards1.style.backgroundImage = "url('İmg/Haalandcard.jpeg')";
   
     card1.remove();
     card2.remove();
     card3.remove();
     card4.remove();
     cards1.style.top="15%";
     card1.style.height="53%";

     cardcontainer.appendChild(geridon);
     cardcontainer.appendChild(cards1);
  
    }
    if(cardarray[i].classList=="card2")
    {
  
     cards1.classList.add("card");
     cards1.style.backgroundImage = "url('İmg/JUDEBELLINGHAM.jpeg')";
     card1.remove();
     card2.remove();
     card3.remove();
     card4.remove();
     cards1.style.top="15%";
     card1.style.height="53%";


     cardcontainer.appendChild(geridon);
     cardcontainer.appendChild(cards1);
    }
    if(cardarray[i].classList=="card3")
    {

        cards1.classList.add("card");
        cards1.style.backgroundImage = "url('İmg/KYLIANMBAPPE.jpeg')";
      
        card1.remove();
        card2.remove();
        card3.remove();
        card4.remove();
        cards1.style.top="15%";
        card1.style.height="53%";
   
        cardcontainer.appendChild(geridon);
        cardcontainer.appendChild(cards1);
    }
    if(cardarray[i].classList=="card4")
    {

        cards1.classList.add("card");
        cards1.style.backgroundImage = "url('İmg/CristianoRonaldocoard.jpeg')";
      
        card1.remove();
        card2.remove();
        card3.remove();
        card4.remove();
        cards1.style.top="15%";
        card1.style.height="53%";
   
        cardcontainer.appendChild(geridon);
        cardcontainer.appendChild(cards1);
    }

    


 }
    const geri =() =>
    {
        cards1.remove();
       cardcontainer.appendChild(card1);
       cardcontainer.appendChild(card2);
       cardcontainer.appendChild(card3);
       cardcontainer.appendChild(card4);
       geridon.remove();
    }


 geridon.addEventListener("click", geri);
    cardarray[i].addEventListener('click',cardopen);
}



