import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";



export function SocketIODemo() {
    const [keyLog, setKeyLog] = useState<string[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);
    useEffect(() => {
        console.log("SocketIODemo  mounted. setting up socket.io")

        const newSocket = io("https://SocketIOServer-livecode-jan23.neillbogie.repl.co");
        newSocket.on("key-pressed", (key, pos) => { setKeyLog(prev => [...prev, key]) });

        setSocket(newSocket);

        function cleanup() {
            console.log("running cleanup as component was un-mounted")

            newSocket.disconnect();
        }
        return cleanup;
    }, []);


    console.log("re-rendered SocketIODemo")
    return <>
        KeyLog: {keyLog.join("")}
        <hr />
        {socket ?
            <>
                <button onClick={() => socket.emit("key-pressed", "1", { x: 0, y: 0 })}>Send 1</button>
                <button onClick={() => socket.emit("key-pressed", "2", { x: 0, y: 0 })}>Send 2</button>
                <button onClick={() => socket.emit("key-pressed", "3", { x: 0, y: 0 })}>Send 3</button>
            </>
            : <p>no socket yet</p>}

        socket io demo</>;
}
