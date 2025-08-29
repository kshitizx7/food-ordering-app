import useUserInfo from "../customHooks/useUserInfo";
import Shimmer from "./shimmer";

const UserInfo = ({ user_name, profile, location }) => {
  const userData = useUserInfo(user_name);

  return userData === null ? (
    <Shimmer />
  ) : (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-24 h-24 mb-4">
        <img
          className="w-full h-full rounded-full object-cover border-4 border-yellow-400 shadow"
          src={userData.avatar_url}
          alt="User Avatar"
        />
      </div>

      {/* User Info */}
      <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
      <p className="text-gray-500 text-sm mt-1">{profile}</p>
      <p className="text-gray-400 text-sm mt-1">📍 {location}</p>

      {/* GitHub Contact */}
      <a
        href={`https://github.com/${userData.login}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300"
      >
        Connect
      </a>
    </div>
  );
};

export default UserInfo;
