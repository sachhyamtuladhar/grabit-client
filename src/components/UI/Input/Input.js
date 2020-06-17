import React from 'react'

import styles from './Input.module.scss'

const input = (props) => {
    let inputElement = null

    const inputClasses = [styles.InputElement]

    if(props.invalid &&  props.touched){
        inputClasses.push(styles.Invalid)
    }

    switch(props.inputtype){
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.config} value={props.value} onChange={props.changeHandler}/>
        break

        case('textarea'):
            inputElement = <textarea  className={inputClasses.join(' ')} {...props.config} value={props.value} onChange={props.changeHandler}/>
        break

        case('select'):
            inputElement = (
                <select  
                    className={inputClasses.join(' ')}  
                    value={props.value}
                    onChange={props.changeHandler}
                >
                    {props.config.options.map(option=>(
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select> 
            )
        break

        default:
            inputElement = <input type={props.type} className={inputClasses.join(' ')} {...props.config} value={props.value} onChange={props.changeHandler}/>
    
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input
