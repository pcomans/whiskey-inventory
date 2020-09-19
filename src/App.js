import React from "react";
import "./App.css";
import { Status, Whiskey } from "./Whiskey";
import WhiskeyList from "./WhiskeyList";
import FilterSelector, { AllSelected } from "./FilterSelector";
import Modal from "react-modal";

class App extends React.Component {
  customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }

  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false,
      selectedFilter: AllSelected,
      whiskeys: [
        new Whiskey(
          "Colonel E.H. Taylor",
          "Straight Kentucky Bourbon",
          2020,
          Status.HAVE
        ),
        new Whiskey("Smoke Wagon", "Uncut and Unfiltered", 2020, Status.WANT),
      ],
    };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render = () => {
    return (
      <div className="App">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (this.subtitle = _subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        <header className="App-header">
          <h1>Whiskey Inventory</h1>
        </header>
        <FilterSelector
          onChange={this.onFilterChanged}
          value={this.state.selectedFilter}
        />
        <WhiskeyList
          whiskeys={this.state.whiskeys}
          filter={this.state.selectedFilter}
        ></WhiskeyList>
      </div>
    );
  };
  onFilterChanged = (filter) => {
    this.setState({
      selectedFilter: filter,
    });
  };
}

export default App;
