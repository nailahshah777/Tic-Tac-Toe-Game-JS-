let collectionis=document.querySelectorAll('.grid_item');

collectionis=Array.from(collectionis)
let turn='x';
let winnerFound=0;
let beepsound=new Audio('./sound/beep2.wav')
let winsound=new Audio('./sound/dhol.mp3')
const changeTurn=()=>{
   
   
    if(turn=='x')
    {
        turn='0';

    }
    else
    {
        turn='x'
    }
    document.getElementById('msg').innerHTML=`turn of player ${turn}`
    
}
const checkWin=(i)=>{

collectionis.map((el,ind)=>{

if((i==0) &&(i==ind))
{
    if((collectionis[0].innerHTML===collectionis[1].innerHTML)&&(collectionis[1].innerHTML=== collectionis[2].innerHTML ))
    {console.log("winer 00")
       
        winnerFound=1;
    }
    else if((collectionis[0].innerHTML===collectionis[3].innerHTML)&&(collectionis[3].innerHTML=== collectionis[6].innerHTML))
    {
    
        console.log("winner is 0 2")
        winnerFound=1;
    }
    else if((collectionis[0].innerHTML===collectionis[4].innerHTML) &&(collectionis[4].innerHTML=== collectionis[8].innerHTML))
    {
        
        console.log("winner is 0 3")
        winnerFound=1;
    }
   
}

//index change 1


else if((i==1) &&(i==ind))
{
    if((collectionis[1].innerHTML===collectionis[4].innerHTML)&&(collectionis[4]===collectionis[7].innerHTML ))
    {
       
        console.log("winner is 1 0")
        winnerFound=1;
    }
    else if((collectionis[1].innerHTML===collectionis[0].innerHTML)&&(collectionis[0].innerHTML===collectionis[2].innerHTML))
    {
        
        console.log("winner is 1 1")
        winnerFound=1;
    }
    

}
//index 2
else if((i==2) &&(i==ind))
{
    if((collectionis[2].innerHTML===collectionis[5].innerHTML)&&(collectionis[5].innerHTML===collectionis[8].innerHTML ))
    {
       
        console.log("winner is 2 0")
        winnerFound=1;
    }
    else if((collectionis[2].innerHTML===collectionis[4].innerHTML)&&(collectionis[4].innerHTML===collectionis[6].innerHTML))
    {
        
        console.log("winner is 2 1")
        winnerFound=1;
    }
    else if((collectionis[2].innerHTML===collectionis[1].innerHTML)&&(collectionis[1].innerHTML=== collectionis[0].innerHTML))
    {
       
        console.log("winner is 2 2")
        winnerFound=1;
    }
    
}
//index 3
else if((i==3) &&(i==ind))
{
    if((collectionis[3].innerHTML===collectionis[4].innerHTML)&&(collectionis[4].innerHTML===collectionis[5].innerHTML ))
    {
        
        console.log("winner is 3 0" )
        winnerFound=1;
    }
    else if((collectionis[3].innerHTML===collectionis[0].innerHTML)&&(collectionis[0].innerHTML===collectionis[6].innerHTML))
    {
       
        console.log("winner is 3 1")
        winnerFound=1;
    }
    

}

//index 4
else if((i==4) &&(i==ind))
{
    if((collectionis[4].innerHTML===collectionis[3].innerHTML)&&(collectionis[3].innerHTML===collectionis[5].innerHTML ))
    {
        
        console.log("winner is 4 0")
        winnerFound=1;
    }
    else if((collectionis[4].innerHTML===collectionis[1].innerHTML) &&(collectionis[1].innerHTML===collectionis[7].innerHTML))
    {
        
        console.log("winner is 4 1")
        winnerFound=1;
    }
    
    
}
//index 5
else if((i==5) &&(i==ind))
{
    if((collectionis[5].innerHTML===collectionis[2].innerHTML) &&(collectionis[2].innerHTML===collectionis[8].innerHTML ))
    {
        console.log("winner is 5 0")
        winnerFound=1;
    }
    else if((collectionis[5].innerHTML===collectionis[4].innerHTML)&&(collectionis[4].innerHTML===collectionis[3].innerHTML))
    {
        
        console.log("winner is 5 1")
        winnerFound=1;
    }
    
    
}
//index 6
else if((i==6) &&(i==ind))
{
    if((collectionis[6].innerHTML===collectionis[7].innerHTML )&&(collectionis[7].innerHTML===collectionis[8].innerHTML ))
    {
       
        console.log("winner is 6 0")
        winnerFound=1;
    }
    else if((collectionis[6].innerHTML===collectionis[3].innerHTML) &&(collectionis[3].innerHTML===collectionis[0].innerHTML))
    {
        
        console.log("winner is 6 1")
        winnerFound=1;
    }
    else if((collectionis[6].innerHTML===collectionis[4].innerHTML)&&(collectionis[4].innerHTML===collectionis[2].innerHTML))
    {
        console.log("winner is 6 2")
        winnerFound=1;
    }
   

}
//index 7
else if((i==7) &&(i==ind))
{
    if((collectionis[7].innerHTML===collectionis[4].innerHTML)&&(collectionis[4].innerHTML===collectionis[1].innerHTML ))
    {
        console.log("winner is 7 0")
        winnerFound=1;
    }
    else if((collectionis[7].innerHTML===collectionis[6].innerHTML)&&(collectionis[6].innerHTML===collectionis[8].innerHTML))
    {
        console.log("winner is 7 1")
        winnerFound=1;
    }
    
    

}

//index 8
else if((i==8) &&(i==ind))
{
    if((collectionis[8].innerHTML===collectionis[5].innerHTML)&&(collectionis[5].innerHTML===collectionis[2].innerHTML ))
    {
        
        console.log("winner is 8 0")
        winnerFound=1;
    }
    else if((collectionis[8].innerHTML===collectionis[4].innerHTML)&&(collectionis[4].innerHTML===collectionis[0].innerHTML))
    {
        console.log("winner is 8 1")
        winnerFound=1;
    }

    else if((collectionis[8].innerHTML===collectionis[7].innerHTML)&&(collectionis[7].innerHTML===collectionis[6].innerHTML))
    {
        console.log("winner is 8 2")
        winnerFound=1;
    }
   
    
    

}
}
)
if(winnerFound===1)
{
    console.log("winner logic")
    winsound.play()
    console.log(`1winner is ${turn}`)

    document.getElementById('msg').innerHTML=`winner is player ${turn}`
    console.log(`2winner is ${turn}`)
    document.getElementById('teddy').style.display='block';
}   
}
collectionis.map((elem,index)=>{
     elem.addEventListener('click',()=>{
        beepsound.play()
         elem.innerHTML=`${turn}`
         
         checkWin(index)
         if(winnerFound===0)
         {
         changeTurn()
         }
     })
   
     

 })
 changeTurn()
 let resetbtn=document.getElementById('reset');
 const gameReset=()=>{
    console.log("collectionis",collectionis)
   collectionis.map((elem)=>{
       
       elem.innerHTML=""
})

turn='x'
document.getElementById('msg').innerHTML=`turn of ${turn}`;
document.getElementById('teddy').style.display='none';
winsound.pause()
winnerFound=0;
}
 resetbtn.addEventListener('click',gameReset)
 
 
