const PollContract = artifacts.require("PollContract");

module.exports = function (deployer) {
    deployer.deploy(PollContract);
};
const addresses = {
    pollContract: PollContract.address,
};
console.log(`export const ADDRESSES = ${JSON.stringify(addresses).replace(/"/gmi, '\'')};`);