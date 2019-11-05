import React from 'react';


function BreakInterval(props) {

    function decreaseCounter() {
        if(props.breakInterval === 1){
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter(){
        if(props.breakInterval === 60){
            return;
        }

        props.increaseBreak();
    }

    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container">
                <button onClick={increaseCounter}>+</button>
                <p className="interval-length">{props.breakInterval}</p>
                <button  onClick={decreaseCounter}>-</button>
            </section>

        </section>
    )
}

export default BreakInterval;