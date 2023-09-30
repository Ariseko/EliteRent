import React, {useState} from 'react';

const Testjs = () => {
    const [value, setValue] = useState('react');
    return (
        <div>
            <h1>Input value: "{value}"</h1>
            <select
                onChange={event => setValue(event.target.value)}
                defaultValue={value}
            >
                <option value="react">React</option>
                <option value="js">JavaScript</option>
            </select>

            <button onClick={() => console.log(value)}>Get state</button>
        </div>
    );
};

export default Testjs;