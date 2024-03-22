
const Playernames=document.querySelector(".Playernames");


const cardcontainer=document.querySelector(".cardcontainer");
const player1=document.querySelector(".player1");


const player1name=document.querySelector(".player1name");
const player2name=document.querySelector(".player2name");


const player2=document.querySelector(".player2");
const Playername1=document.querySelector(".Playername");
const info=document.querySelector(".info");
const loginblock=document.querySelector(".loginblock");

let Playername2=document.createElement("input");
Playername2.type="text";
Playername2.classList.add("Playername2");
Playername2.remove();




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
        
    

        Playername2.remove();
        info.remove();


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
        }

        startbutton.addEventListener("click",Start);
     }  
}










Playername2.addEventListener("keypress",Names2)
Playername1.addEventListener("keypress",Names1);

