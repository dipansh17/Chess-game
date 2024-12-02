import { useEffect, useState } from "react";

// import {WS_URL} from "../../urls.ts"
const WS_URL="ws://localhost:8080";
const UseSocket = () => {
    const [socket,setSocket]=useState<WebSocket | null>(null);
    
    useEffect(()=>{
        const ws=new WebSocket(WS_URL);
        ws.onopen=()=>{
            console.log("connected");
            setSocket(ws);
        }
        ws.onclose=()=>{
            console.log("disconnected");
            setSocket(null);
        }
        return ()=>{
            ws.close();
        }
    },[]);
  return socket;
}
export default UseSocket