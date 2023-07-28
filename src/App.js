// App.js

import React from 'react';
import Hello from './Components/Helloworld';
import ClickAlert from './Components/Clickalert'; // Import the ClickAlert component
import Interactive_button from './Components/Interactive_button';
import Iterate from './Components/Iteratelist';
import Customlist from './Components/Custom_list_props';
import Form from './Components/Form'
import Render from './Components/Renderjson';
import API from './Components/API_unpslash';
import './App.css';

function App() {
    return (
        <div>
          <p>Exercise 1: Hello World!</p>
          <Hello />
        <hr />
         
        <p>Exercise 2: Capturing User Clicks</p>
            <ClickAlert /> {/* Use the ClickAlert component */}
        <hr />

        <p>Exercise 4: State and Props</p>
            <Interactive_button />
            <hr />

            <p>Exercise 5: Mapping Through A List And Rendering</p>
            <Iterate />
            <hr />
           
           <p>Exercise 6 : Mapping Through A List And Rendering (With A Custom Component)</p>
           <Customlist list={["fahad","pakistan","India"] }/>
           <Customlist list={["Hammad","Russia","Europe"] }/>
           <Customlist list={["Moharrarm","Data","Newxeland"] }/>
           <hr />

           <p>Exercise 7 : Building a form </p>
           <Form />
           <hr />

            <p>Exercise 8 : Json Data rendering</p>
            <Render />
            <hr />

            <p>Exercise 9 : Fetching data from ApI</p>
            <API />
            <hr />


        </div>
    );
}

export default App;
