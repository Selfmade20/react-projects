import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
//import User from '../Containers/User/index'


const Styles = styled.div`
.user_data {
    font-size: 20rem

}


`

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }



    componentDidMount() {
        axios.get("http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/person/")
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        const { data } = this.state
        const dataList = data.length ? (
            data.map(data => {
                return (
                    <div className="data" >
                        <div>
                            <li>
                                <span>Name : {data.name}</span>
                                <p>Message : {data.message}</p>
                            </li>
                        </div>
                    </div>

                )
            })
        ) : (
                <div>No Posts Yet</div>
            )


        return (
            <div className="user_data">
 
                <div style={{ color: "orange", margin: '2rem' }}>{dataList}</div>
                <input value={this.name} onChange={this.handleChange} style={{
                    width: "40%",
                    height: "100px",
                    borderRadius: "4px",
                    margin: "1%",
                    resize: "none"
                }} />

                <button >Post</button> 
            

            </div>
        )
    }
}


export default Posts