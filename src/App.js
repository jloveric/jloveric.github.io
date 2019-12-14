import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
//import {XTerm, Terminal} from 'react-xterm'

import './App.css';

function App() {
  return (
    
        <Terminal
          hideTopBar='true'
          allowTabs='true'
          startState="maximised"
          color='green'
          outputColor='gray'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em", width: "100%" }}
          commandPassThrough={cmd => { 
            return `You said ${cmd.join(' ')}!  This will be connected to the client neural chat bot soon! Stay tuned.`
          }}
          msg="John Loverich Bot - Under Construction"
        />

        /*<XTerm ref='xterm' style={{
          addons:['fit', 'fullscreen', 'search'],
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '100%'
        }} />*/
        
      
    );
  
}


export default App;
