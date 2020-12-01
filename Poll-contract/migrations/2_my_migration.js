const PollContract = artifacts.require("PollContract");

module.exports = function (deployer) {
    deployer.deploy(PollContract);
};
