import React from 'react';
import ArrowRight from "@material-ui/icons/ArrowRight";
import {Link} from 'react-router-dom';

import './Mittaus.css';

import moment from 'moment';

function Mittaus(props) {
  
  let mittauspaiva = moment(props.data.mittauspaiva);
  let viikko = moment(props.data.viikko);

    return (
      <div className="mittaus">
         <div className="mittaus__ryhma">
         <div className="mittaus__rivi">
         <div className="mittaus__viikko"> viikko: {viikko.format("W")}</div>
          <div className="mittaus__mittauspaiva">mittauspäivä: {mittauspaiva.format("D.M.Y")} </div> 
        </div>
          <div className="mittaus__rivi">
          <div className="mittaus__paino">paino: {props.data.paino} kg</div>
            <div className="mittaus__vyotaro">vyötärö: {props.data.vyotaro} cm</div>
          </div>
          </div>
            <div className="mittaus__linkki">
           <Link to={"/edit/" + props.data.id}><ArrowRight /></Link>
          </div>
        </div>
       
        
    );
    }

  export default Mittaus;