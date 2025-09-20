
import React, { useState } from 'react';


function WelcomeComponent() {

  const dynamicData = "a syntax extension for JavaScript that looks similar to HTML.";


  return (
    <div>
      <h1>Welcome to JSX</h1>
      
      <p>JSX is {dynamicData} It allows you to write HTML-like code inside your JavaScript files.</p>
    </div>
  );
}


export default WelcomeComponent;