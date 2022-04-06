const { assert } = require("console");

const Chama = artifacts.require("Chama");
contract("Chama", () => {

  describe("Chama DApp", function(){

  })
  it("Should track the first chama details created upon contract deployment", () => {
    Chama.deployed()
      .then((instance) => instance.chamaManager())
      .then((manager) => {
        assert.equal(manager, deployAddress, "Not the correct address");
      });
  });
  it("should join first member to the Chama", () => {
      Chama.deployed()
      .then(instance => instance.joinChama())
      .then(memberID => {
          assert.equal(memberID, 1, "Wrong memberID!")
      })
  })
});
