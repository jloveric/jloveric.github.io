import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import { response } from 'neural-chatbot';
import initialize from './Chatbot' 
//import {XTerm, Terminal} from 'react-xterm'
let result = initialize()

class BotComponent extends Component {
    
    constructor() {
      super()
      this.userData = null
      this.bot = null
      
      result.then((ans)=>{
        this.userData = ans.userData
        this.bot = ans.bot
      }) 
    }
    
    componentDidMount() {
      
    }

    render() {

      /*return (<form>
        <input type="text" name="faname"></input>
        <input type="submit"></input>
      </form>)*/

      
      return <Terminal
          hideTopBar='true'
          allowTabs='true'
          startState="maximised"
          color='green'
          outputColor='gray'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em", width: "100%" }}
          commandPassThrough={async (cmd) => { 
            if(this.bot) {
              let ans = await this.bot.getResult(cmd.join(' '), this.userData)
              console.log('ans',ans.response)
              return 'Testing'
            } else {
              return `Making my mind.  Please be patient.`
            }
          }}
          msg="JLO Bot - Under Construction"
        />
    }
}

export default BotComponent