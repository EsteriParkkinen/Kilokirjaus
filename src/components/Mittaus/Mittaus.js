import React from 'react';

import './Mittaus.css';

function Mittaus(props) {
  

    return (
      <div className="mittaus">
         <div className="mittaus__rivi">
         <div className="mittaus__viikko"> viikko: {props.data.viikko}</div>
          <div className="mittaus__mittauspaiva">mittauspäivä: {props.data.mittauspaiva} </div> 
        </div>
          <div className="mittaus__rivi">
          <div className="mittaus__paino">paino: {props.data.paino} kg</div>
            <div className="mittaus__vyotaro">vyötärö: {props.data.vyotaro} cm</div>
          </div>
        </div>
    );
    }

  export default Mittaus;