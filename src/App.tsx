import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Monitor} from "./components/Monitor";

const App = () => {
    const [score, setScore] = useState(0)
    const increment = () => setScore(score + 1)
    const reset = () => setScore(0)

    return (
        <div className={'general'}>
            <div className={'counter'}>
                <Monitor score={score}/>
            </div>
            <div>
                <Button title={'inc'} disabled={score === 5} click={increment}/>
                <Button title={'reset'} disabled={score === 0} click={reset}/>
            </div>
        </div>
    );
};

export default App;