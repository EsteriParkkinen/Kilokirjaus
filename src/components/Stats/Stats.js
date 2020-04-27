import React from 'react';

import Content from '../Content/Content';

import { Line } from 'react-chartjs-2';

import './Stats.css';

function Stats(props) {

 let linedata = props.data.map( item => ({x: item.mittauspaiva, y: item.paino}) );
 
 let data = {
   datasets: [
     {
       label: "paino",
       data: linedata,
       fill: false,
       backgroundColor: 'rgba(0,0,0,0.2)',
       borderColor: 'rgba(0,0,0,0.1)',
     }
   ]
 }

 let options = {
   responsive: true,
   maintainAspectRatio: false,
   scales: {
   xAxes: [
     {
       type: "time",
       time: {
         displayFormats: {
           day: 'D.M.Y',
           month: 'M.Y'
         }
       }

     }
   ]
  }
}

    return (
     <Content>
       <div className="stats">
       <h2>Seuranta</h2>
       <div className="stats__graph">
       <Line data ={data} options={options} />
       </div>
       </div>
     </Content>
    );
  }

  export default Stats;