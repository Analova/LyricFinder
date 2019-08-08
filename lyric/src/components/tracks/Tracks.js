import React, { Component } from "react";
import { Consumer } from "../../context";
import Track from "../tracks/Track";
import Spinner from "../layout/Spinner";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </>
            );
          }
        }}
      </Consumer>
    );
  }
}

// rfc
// rcc
