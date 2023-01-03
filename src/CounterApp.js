import React, { Component } from "react";

class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : this.props.num
        }
    }
    incre() {
        this.setState({count:this.state.count+1});
    }
    decre() {
        this.setState({count:this.state.count-1});
    }
    reset() {
        this.setState({count:this.state.count = this.props.num});
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1>Counter App</h1>
                    <h3>{this.state.count}</h3>
                    <div className="topbtn">
                        <button onClick={()=>this.incre()}>+</button>
                        <button onClick={()=>this.decre()}>-</button>
                    </div>
                    <button className="lastbtn" onClick={()=>this.reset()}>Reset</button>
                </div>
            </>
        )
    }
}

export default CounterApp;