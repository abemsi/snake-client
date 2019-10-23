const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.15.225',
    port: 50541
  });
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: WIN");
  });

  // Moves
  let delay = 0;
  conn.on("connect", () => {
    // let m = setInterval(() => {
    //   conn.write("Move: up");
    //   conn.write("Move: right");
    // }, 500);
    // setTimeout(() => clearInterval(m), 5000);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect,
}