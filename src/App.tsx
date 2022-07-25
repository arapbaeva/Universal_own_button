import React, {useState} from 'react';
import './App.css'
import {Button} from "./Button";

/*const App = () => {
    const [view, setView] = useState("")
    const Button1Foo = (name: string, age: string, currentLocation: string, interestedIn: string) => {
        if (view) {
            setView('')
        } else {
            setView(name + age + currentLocation + interestedIn)
        }
    }

    return (
        <div>
            <Button name={"About Me!"}
                    callBack={() => Button1Foo("My name is Aiym.", "I'm 29.", "Citizen of Peace :).", "Coding is my hobby.")}/>
            {view}
        </div>
    );
};*/

const App = () => {
//     const [view, setView] = useState<boolean>(false)
//
//     return (
//         <div>
//             <Button name={"About Me!"} callBack={() => setView(!view)}/>
//             {view ? 'My name is Aiym. I\'m 29. Citizen of Peace :). Coding is my hobby.' : null}
//         </div>
//     );
// };

    const [view, setView] = useState(false)
    return (
        <div className='App'>
            <Button name={"Click me"} callBack={() => setView(!view)}/>
            {view && 'My name is Aiym. I\'m 29. Citizen of Peace :). Coding is my hobby.'}
        </div>
    );
}
export default App;