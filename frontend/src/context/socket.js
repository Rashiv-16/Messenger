// import { useContext } from "react";
import { io } from "socket.io-client";

import React from "react";

// import socketio from "socket.io-client";

export const socket = io("http://localhost:5000", {
  transports: ["websocket"],
  autoConnect: false,
});

// export const socket = socketio.connect("http://localhost:5000", {
//   transports: ["websocket"],
// });
export const SocketContext = React.createContext();
