
const Playernames=document.querySelector(".Playernames");
const body=document.getElementsByTagName("body");

const cardcontainer=document.querySelector(".cardcontainer");
const player1=document.querySelector(".player1");


const player1name=document.querySelector(".player1name");
const player2name=document.querySelector(".player2name");


const player2=document.querySelector(".player2");
const Playername1=document.querySelector(".Playername");
const info=document.querySelector(".info");
const loginblock=document.querySelector(".loginblock");
const card1=document.querySelector(".card1");
const card2=document.querySelector(".card2");
const card3=document.querySelector(".card3");
const card4=document.querySelector(".card4");
const card5=document.querySelector(".card5");
const card6=document.querySelector(".card6");
const card7=document.querySelector(".card7");
const card8=document.querySelector(".card8");
const card9=document.querySelector(".card9");
const card10=document.querySelector(".card10");
let Playername2=document.createElement("input");
Playername2.type="text";
Playername2.classList.add("Playername2");
Playername2.remove();

let cardarray=[card1,card2,card3,card4,card5,card6,card7,card8,card9,card10];
for(let i=0; i<cardarray.length; i++)
{
    cardarray[i].remove();
}

const Names1=(e) =>
{
     if(e.keyCode=='13')
     {
        e.preventDefault();
    
         player1name.textContent=Playername1.value;
         Playername1.value="";
         Playername1.remove();
         loginblock.appendChild(Playername2);
         info.textContent="2. oyuncunun adını giriniz";
         info.style.color="Green";
       
     }  

 
}


const Names2=(e)=>
{
    if(e.keyCode=='13')
     {
       
      
       
        player2name.textContent=Playername2.value;
        Playername2.value="";
        loginblock.appendChild(Playername2);
        
    

        Playername2.remove(); //
        info.remove(); //


        let startbutton=document.createElement("button");
        startbutton.style.position="absolute";
        startbutton.style.backgroundColor="Green";
        startbutton.style.color="White";
        startbutton.style.width="15em";
        startbutton.style.borderRadius="0.5em";
        startbutton.style.height="4em";
        startbutton.textContent="Oyuna başla";
        startbutton.style.top="40%";
        startbutton.style.left="35%";
        Playernames.appendChild(startbutton);

        e.preventDefault();


        const Start=() =>
        {
            loginblock.remove();
            
          for(let i=0; i<cardarray.length; i++)
          {
            cardcontainer.appendChild(cardarray[i]);
          }




          for(let i=0; i<cardarray.length; i++)
          {
             

            
            const kartiac=()=>
            {
                let oyunsirasi=1;
            

                if(cardarray[i].classList==cardarray[i].classList)
                {
                    alert(cardarray[i].classList+" karta basıldı");
                }
            }
            
         cardarray[i].addEventListener("click",kartiac);

          }

             
         
          
            
        }

        startbutton.addEventListener("click",Start);
     }  
}










Playername2.addEventListener("keypress",Names2)
Playername1.addEventListener("keypress",Names1);

let a=1;