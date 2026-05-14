import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

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
            <h1>Class Component - About US </h1>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <h2>Developed By :-</h2>

            <UserClass name={"first"} location={"bly"}/>
            
        </div>
        );
    };
};


export default About;
