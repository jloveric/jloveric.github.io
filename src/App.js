import React from 'react';
import NeuralChatbotReactRetro from 'neural-chatbot-react-retro'
import defaultConfig from './PhraseDatabase';
import './App.css';

function App() {

  return (
    <div style={{ margin: '2%' }}>
      <NeuralChatbotReactRetro backgroundColor='black' botConfig={defaultConfig}></NeuralChatbotReactRetro>
    </div>
  );

}


export default App;
