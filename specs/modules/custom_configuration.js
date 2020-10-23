// eslint-disable-next-line @typescript-eslint/no-var-requires
const ip = require("ip");

function handle() {
  this.host = ip.address();
}

module.exports = {
  handle
};