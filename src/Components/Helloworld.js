/* 

Exercise 1: Hello World!
Start by rendering a square with a background color. Inside the square, render "Hello, World!".



*/
export default function hello(){
   const squarestyle={
        width:200,
        height:200,
        backgroundColor:'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


   };
   

   
   
    return(
        <div style={squarestyle}>
        <h1>Hello World</h1>
        </div>
    )

}
