export default function iteratelist(){

    const names_of_class=["ali","adil","hammad","fahad","zain","Ali"];

    return(
        <ul>
        {names_of_class.map((element,index)=>(
<li key={index}>{element}</li>
        ))}
    </ul>
    

    )



}