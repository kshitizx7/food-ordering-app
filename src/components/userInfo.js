import useUserInfo from "../customHooks/useUserInfo";
import Shimmer from "./shimmer";

const UserInfo = ({user_name , profile , location}) => {
    const userData = useUserInfo(user_name);

    return userData === null ? <Shimmer /> :(
        <div className="userContainer">
            <div className="photo_container">
            <img
                className="userImage"
                src={userData.avatar_url}
                alt="User Avatar"
            />
            </div>
            <div className="userInfo">
            <h2 className="userName">{userData.name}</h2>
            <h3 className="userProfile">Profile: {profile}</h3>
            <h4 className="userContact">Contact: {userData.login}</h4>
            <h4 className="userLocation">Location: {location}</h4>
            </div>
        </div>
    )
}

export default UserInfo;