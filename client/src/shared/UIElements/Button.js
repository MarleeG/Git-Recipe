import React from 'react';

import './Button.css';


const Button = (props)=> {
return <button onClick={() => console.log('CLICKED')} className="btn font-amatic odd-radius">{props.text}</button>
}

export default Button;