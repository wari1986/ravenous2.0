import React from 'react';
import BusinessList.css from './BusinessList';
import Business.js from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return(
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    )
  }
}

export default BusinessList;
