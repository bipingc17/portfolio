// const Welcome = () => {
//     return <h1>Hello</h1>
// }
import React from "react";
class Welcome extends React.Component{
    constructor(){
        super()
        this.state = {
            userList: [],
            loading: true,
            pageTitle: "User List"
        }
        // state initilization 
        // initialize any data/methods needed in your component 
        console.log("I am first")
    }

    componentDidMount = () => {
        // first network call 
        let apiData = [
            {
                name: "User One",
                email: "userone@broadwayinfosys.com",
                address: "Kathmandu"
            }
        ]
        this.setState({
            ...this.state,
            userList: apiData
        })

        setTimeout(() => {
            this.setState({
                ...this.state,
                loading: false
            })
        }, 2000)
        // api call and update the state 
        console.log("I am third call")
    }

    componentDidUpdate = () => {
        console.log("I am after every render call")
    }

    componentWillUnmount = () => {
        console.log("I am the last call before switichng to another component or reloading the compontnet")
    }
    
    render = () => {
        console.log("I am after Contstructor")
        console.log("I am always called after any change on component")
        // table => data 
        return (
            <>
                <h1>{ this.state.pageTitle }</h1>
                <table>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.loading ? <>Loading...</> : "Table"
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Welcome;