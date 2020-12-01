const PollContract = artifacts.require("PollContract");

module.exports = async function (deployer) {
    console.log('try to deploy PollContract');
    await deployer.deploy(PollContract);
    const pollCcontract = await PollContract.deployed();
    console.log('\n PollContract deplyement succes -->' ,PollContract.address);
};
const addresses = {
    pollContract: PollContract.address,
};
console.log(`export const ADDRESSES = ${JSON.stringify(addresses).replace(/"/gmi, '\'')};`);