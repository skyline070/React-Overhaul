import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);

    // console.log(this.props.name + "Child Constructor")
        
    this.state = {
        userInfo: {
            name: "sky",
            Bio: "bly",
            html_url: "https",

        },
    };
    }

    async componentDidMount() {

        // console.log(this.props.name + "Child CDM")

        const data = await fetch("https://api.github.com/users/skyline070");
        const json = await data.json();

        // console.log(json);

        this.setState({
            userInfo: json,
        });

    };

    componentDidUpdate() {
        // console.log("componentDidUpdate child")
    };

    componentWillUnmount() {
        // console.log("componentWillUnmount child")
    };

    render() {

        // console.log(this.props.name + "Child Render")

       const {name, bio, html_url} = this.state.userInfo;

        return (
            <div className="user-card m-4 p-4 bg-gray-100 rounded-lg w-72">
                
                <h2>Name: {name}</h2>
                <h3>Bio: {bio}</h3>
                <h4>Github: {html_url}</h4>
            </div>
        );
    };
};

export default UserClass;