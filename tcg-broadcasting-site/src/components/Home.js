import React from 'react'
import styled from 'styled-components';
import phone from '../assets/phone.jpg'
import '../App.css'

const Styles = styled.div`
.wrapper {
    margin: 20px;
    font-family: sans serif;
    text-align: left;
    color: white;
}

.submit-button {
    font-size: 15px;
    margin-top: 10px;
    border-radius: 4px;
}

.form-control {
    display: block;
    width: 100%;
    

`


export const Home = () => (
    <Styles>
        <div className="wrapper">
            <h1 className="header">WELCOME TO</h1>
            <h1 className="header">THE CODING GROUND</h1>
            <form id="survey-form">
                <div className="form-group">
                    <label className="name-label" for="name">Name</label>
                    <input
                        type="text"
                        name="text_name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>



        </div>

    </Styles>

)