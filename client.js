const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AAB");
  });

  // Moves
  
  conn.on("connect", () => {
    // let m = setInterval(() => {
    // conn.write("Move: up");
    //   conn.write("Move: right");
    // }, 500);
    // setTimeout(() => clearInterval(m), 5000);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect
}