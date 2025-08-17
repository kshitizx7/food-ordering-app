

const UserInfo = ({name , profile , contact}) => {
    return (
        <div className="userContainer">
            <h2>Name :{name}</h2>
            <h3>profile : {profile}</h3>
            <h4>contact : {contact}</h4>
        </div>
    )
}

export default UserInfo;