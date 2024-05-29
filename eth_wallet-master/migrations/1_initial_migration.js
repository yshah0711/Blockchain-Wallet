const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  await tokenMock.mint(
    '0x6E5b473EFF4CaCe0aA499aC31dcD5322D4622033',
    '100000000000000000000000'
  )
};
