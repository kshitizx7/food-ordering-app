import React from "react"
class UserClass extends React.Component {
    

    constructor(props) {
        super(props);
        //state Varible
        this.state = {
            name : "Mansi gupta",
            profile : "Frontend Developer",
            contact : "@mansi_gupta_123"
        };
    }

    render() {

        const{name,profile,contact} = this.state;

        return(
            <div>
                <h2>Name :{name}</h2>
                <h3>profile : {profile}</h3>
                <h4>contact : {contact}</h4>
                {/* taking values from where it is rendered  Linke we do in functional conponents*/}
                <h4>Location : {this.props.location}</h4> 
            </div>
        );
    }

}

export default UserClass;