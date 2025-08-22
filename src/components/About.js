import UserInfo from "./userInfo";


// class About extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     componentDidMount() {
//     }

//     render () {
        
//         return (
//             <div>
//                 <UserInfo  profile = {"Developer"}  location = {"GR. NOIDA"} user_name = {"kshitizx7"} />
//                 {/* <UserClass  profile = {"React engineer"}  location = {"GR. NOIDA"} user_name = {"akshaymarch7"} />
//                 <UserClass  profile = {"JavaScript engineer"}  location = {"GR. NOIDA"} user_name = {"hiteshchoudhary"} /> */}
//             </div>
//         )
//     }
// }

const About = () => {
    return (
        <div>
            <UserInfo location = {"india"} profile = {"Developer"} user_name = {"kshitizx7"} />
            <UserInfo location = {"india"} profile = {"Data engineer"} user_name = {"akshaymarch7"} />
            <UserInfo location = {"india"} profile = {"Logistics and Operations Head"} user_name = {"hiteshchoudhary"} />
        </div>
    )
}

export default About;
