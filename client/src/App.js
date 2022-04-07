import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChamaContract from "./contracts/Chama.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import CreateChama from "./components/CreateChama";
import AvailableChamas from "./components/AvailableChamas";
import Account from "./components/Account";
import { Spinner } from "react-bootstrap";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ChamaContract.networks[networkId];
      const instance = new web3.eth.Contract(
        ChamaContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

 

  /** 
   *  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    //await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();

    // Update state with the result.
    //this.setState({ storageValue: response });
  };
   * if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    ); */

  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <>
          <Navigation />
        </>
        <div>
          {this.state.web3 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
              }}
            >
              <Spinner animation="border" style={{ display: "flex" }} />
              <p className="mx-3 my-0">Loading Web3, accounts, and contract...</p>
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/create-chama"
                element={<CreateChama />}
              />
              <Route
                path="/chamas"
                element={
                  <AvailableChamas />
                }
              />
              <Route
                path="/account"
                element={
                  <Account />
                }
              />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
    )
   
  }
}

export default App;