import React from "react";
import { USER_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import useUserInfo from "../customHooks/useUserInfo";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };

    
  }
  
  componentDidMount() {
    const fetchData = async () => {
        const {user_name} = this.props;
        
        const data = await fetch(USER_URL + user_name);
        const json = await data.json();

        
        this.setState({
          userData: json,
        });
      
    };

    fetchData();
  }

  render() {
    const { userData } = this.state;
    const { profile, location } = this.props;

    return userData === null ? (
      <Shimmer />
    ) : (
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
    );
  }
}

export default UserClass;
