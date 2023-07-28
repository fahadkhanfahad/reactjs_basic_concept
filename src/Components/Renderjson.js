import File from '../file.json';


export default function render(){

    return(
        <div>
                <li>
                {File.map((elem,index)=>(
                    <li key={index}>
                        <strong>{elem.setup} </strong>
                        <strong>{elem.punchline} </strong>
                        </li>
                    

                ))
                    
                    
                    
                }</li>
        </div>
    )
};