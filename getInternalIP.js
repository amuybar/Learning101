const { execSync } = require("child_process");

try {
  // Run a command to get the internal IP address
  const internalIP = execSync("curl ifconfig.me").toString().trim();
  console.log("Internal IP Address:", internalIP);
} catch (error) {
  console.error("Error retrieving internal IP address:", error.message);
}
