const http = require("http");
const httpProxy = require("http-proxy");

// My Pool of Servers, that are needed to be load balanced
const servers = [
  { host: "localhost", port: 5001 },
  { host: "localhost", port: 5002 },
  { host: "localhost", port: 5003 },
  // can add more servers
];

// Setting current Server index, to perform round robin selection of server
let currentServerIndex = 0;

// Create the proxy server
const proxyServer = httpProxy.createProxyServer({});

// create the load balancer server
const server = http.createServer((req, res) => {

  // Get the server to which we gonna forward this request
  const selectedServer = servers[currentServerIndex];

  // forwarding the request to the selected server
  proxyServer.web(req, res, {
    target: selectedServer,
  });

  // updating the server index, to select next server according to round robin algorithm
  currentServerIndex = (currentServerIndex + 1) % servers.length;
});

// Port at which our load balancer will be running
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Load Balancer is listening on port ${PORT}`);
});
