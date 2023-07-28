/*
Exercise 4: State and Props

Use the useState React hook to track how many times a button is clicked, and display the number.

The number must increment each time the button is clicked:

*/

import { useState } from "react"
export default function Button (){

    const [count,setCount]=useState(0);
function  clickbutton(){
    setCount(count+1);
}
    return(
        <div>
            <button onClick={ clickbutton}>State and Prop Button Interactive </button>
            <h3>You clicked {count} number of times </h3>
        </div>
    )


}