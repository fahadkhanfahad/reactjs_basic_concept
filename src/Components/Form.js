import { useState } from "react"

export default function form(){

    const style1={
        backgroundColor:'red',
        alignContent:'center',
        color:'white'
    }

    const [firstname,setfirstname]= useState("");
    const[lastname,setlastname]= useState(" ");


    
    function greetings(){
        const message=`Hey${firstname} ${lastname}`;
        alert(message);

    }

    return(
        <div>
                <form>
                    <input type="text" placeholder="Ener your first name " onChange={(e) => setfirstname(e.target.value)} ></input> <br />
                    <input type="text"  placeholder="Ener your last name " onChange={(e)=> setlastname(e.target.value)}></input> <br />
                   <button style={style1} onClick={greetings}>Greetings
                    </button>


                </form>


        </div>
    )
}