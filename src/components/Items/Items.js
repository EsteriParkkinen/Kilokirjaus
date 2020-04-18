import React from 'react';

import { Link } from 'react-router-dom';

import Mittaus from '../Mittaus/Mittaus';
import Content from '../Content/Content';

import { FloatingButton } from '../buttons';

function Items(props) {

  let rows = props.data.map(invoice => {
    return (
      <Mittaus data={invoice} key={invoice.id}/>
    );
   }
  );
 
  return (
    <Content>
  {rows}
  <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link>
  </Content>
  );
}

export default Items;