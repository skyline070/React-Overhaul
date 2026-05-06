import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() =>{
        addEventListener("offline", () => {
            setOnlineStatus(false);
         });
        addEventListener("online", () =>{
            setOnlineStatus(true);
        });

    // boolean value    
    },[]);
    return onlineStatus;
};

export default useOnlineStatus;