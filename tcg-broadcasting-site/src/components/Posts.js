import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components';


const Styles = styled.div`
.

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
                    <div className="conta" key={data.uuid}>
                        <div>
                            <span>{data.name}</span>
                            <p>{data.message}</p>
                        </div>

                    </div>
                )
            })
        ) : (
                <div>No Posts Yet</div>
            )


        return (
            <div className="container">
                <h2>Data</h2>
                {dataList}

            </div>
        )
    }
}

export default Posts