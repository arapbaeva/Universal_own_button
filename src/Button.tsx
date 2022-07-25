import React from 'react'
import './Button.css'

type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {
    const onclickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button className='btn' onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};

