import React from 'react'
import { useLocation } from 'react-router-dom';


function Test() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const receivedData = params.get('id');
    return (
      <div>Test: {receivedData}</div>
  
    )  
}

export default Test
