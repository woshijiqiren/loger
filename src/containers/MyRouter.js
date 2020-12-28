import React, { Component } from 'react'
import { Route ,Redirect } from 'react-router-dom'


class MyRouter extends Component {
    render() {
        var name=localStorage.getItem("name")
        return (
            <div>
                {
                    name?<Route {...this.props }></Route>:<Redirect to="/login"></Redirect>
                }
            </div>
        )
    }
}
export default MyRouter