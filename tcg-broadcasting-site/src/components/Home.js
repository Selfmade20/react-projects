import React from 'react'
import styled from 'styled-components';
import phone from '../assets/phone.jpg'

const Styles = styled.div`
.wrapper {
    margin: 20px;
    font-family: sans serif;
    text-align: left;
    color: white;
    font-weight: bold;
    color:blue;
    
}
`


export const Home = () => (
    <Styles>
        <div className="wrapper">
            <h1 >The Coding Ground</h1>

        </div>

    </Styles>

)