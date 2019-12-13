import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import './App.css';

function App() {
  return (
    
        <Terminal
          hideTopBar='true'
          allowTabs='true'
          startState="maximised"
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em", width: "100%" }}
          commandPassThrough={cmd => { 
            return `You said ${cmd.join(' ')}!  This will be connected to the client neural chat bot soon! Stay tuned.`
          }}
          msg='MU-TH-UR 6000 ... Hello Lt. Ripley'
        />
      
    );
  
}


export default App;
