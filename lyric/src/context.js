import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "abcd" } },
      { track: { track_name: "1234" } }
    ],
    heading: "To 10 Tracks"
  };
  render() {
    return (
      <>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  }
}

export const Consumer = Context.Consumer;
