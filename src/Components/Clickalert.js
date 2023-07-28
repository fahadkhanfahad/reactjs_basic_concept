/*
 
Exercise 2: Capturing User Clicks
HTML <button> tag, capture the click event and alert the message, "Clicked!".

*/


export default function clickalert(numclicked){
    function clicked(){
        alert("you clicked me ")
     }


    return(
    <div>
        <button onClick={clicked}>Click me </button>
    </div>
   )
 

 }

 