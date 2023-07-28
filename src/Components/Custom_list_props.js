export default function customelist({list}){

    return(
        <ul>
        {list.map((element,index)=>(
<li key={index}>{element}</li>
        ))}
    </ul>
    

    )



}