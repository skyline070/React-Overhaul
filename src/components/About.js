import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);

    // console.log("Parent Constuctor");
    };

    componentDidMount(){
        // console.log("Parent CDM")
    };

    render(){

        // console.log("Parent Render")
         return(
        <div>
            <h1>About US </h1>
            <h2>Developed By :-</h2>

            <UserClass name={"first"} location={"bly"}/>
            
        </div>
        );
    };
};


export default About;
