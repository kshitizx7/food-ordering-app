import UserInfo from "./userInfo";
import UserClass from "./userClass";

const About = () => {
    return (
        <div>
            <h1> About us..</h1>
            <h2>this is a react page</h2>
            <UserInfo name = {"KSHITIZ SHARMA"} profile = {"Developer"} contact = {"@kshitiz_sharma_17"} />
            <UserInfo name = {"MAYANK RAI"} profile = {"Data engineer"} contact = {"@mayank_rai_10"} />
            <UserInfo name = {"KUSHAAL GUPTA"} profile = {"Logistics and Operations Head"} contact = {"@kushaal_gupta_08"} />
            <UserClass location = {"GR. NOIDA"} />

        </div>
    )
}

export default About;
