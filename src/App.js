import React from 'react';
import NeuralChatbotReactRetro from 'neural-chatbot-react-retro'
import defaultConfig from './PhraseDatabase';
import './App.css';

function App() {

  return (
    <div style={{ margin: '2%' }}>
      <NeuralChatbotReactRetro backgroundColor='black' botConfig={defaultConfig} finishedLoadingMessage="Ok, ready.  Type 'Help' for more information."></NeuralChatbotReactRetro>
    </div>
  );

}


export default App;
