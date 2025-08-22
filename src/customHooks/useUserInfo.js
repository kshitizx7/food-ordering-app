import { USER_URL } from "../utils/constants";
import { useState , useEffect } from "react";

const useUserInfo = (user_name) => {
    const [data,setData] = useState(null);

    useEffect(()=>{

        const fetchData = async () => {
            const data = await fetch(USER_URL + user_name);
            const json = await data.json();
            setData(json);
        }

        if(user_name) fetchData();
        
    },[user_name])
    

    return data;
}

export default useUserInfo;
