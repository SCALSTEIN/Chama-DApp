var Chama = artifacts.require("Chama");

module.exports = function (deployer) {
  deployer.deploy(Chama, 'women254', 3, 3, 50, 408000);
};
