import { useState , useEffect, use } from "react";
import {MENU_URL} from "../utils/constants"

const useMenuInfo = (resId) => {

    const[menu,setMenu] = useState(null);

    const fetchData = async ()=> {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();

        setMenu(json);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return menu;
}

export default useMenuInfo;