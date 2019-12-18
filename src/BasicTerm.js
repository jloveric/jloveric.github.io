import React, { Component } from 'react';
import initialize from './Chatbot'

let result = initialize()

class BotTerm extends Component {

  static defaultProps = {
    backgroundColor : 'black',
    botColor : 'green',
    userColor : 'blue',
    botSymbol : '',
    userSymbol : '>'
  }

  constructor(props) {
    super()
    this.props = props
    
    this.state = {
      value: "",
      list: [],
      response: ''
    }

    this.userData = null
    this.bot = null
  }

  computeBotText(text) {
    return { text: text, user : "bot", color : this.props.botColor, symbol : this.props.botSymbol }
  }
  computeUserText(text) {
    return { text: text, user : "user", color : this.props.userColor, symbol : this.props.userSymbol }
  }

  async addText(text, func) {
    await this.setState((state) => {
      let list = state.list
      list.push(func(text))
      return { input: list}
    })
  }

  async addTextClear(text, func) {
    await this.setState((state) => {
      let list = state.list
      list.push(func(text))
      return { input: list, value: '' }
    })
  }

  componentDidMount() {
    this.addTextClear("Hello, I'm starting up.", this.computeBotText.bind(this))
    result.then((ans) => {
      this.userData = ans.userData
      this.bot = ans.bot
      this.addText("Ok, I've finished loading my brain.  This is good.", this.computeBotText.bind(this))
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault()
    // this.setState({title : event.target.value})
    // value needs to be copied before being used in setState
    console.log('event.target', event.target)
    let inputValue = this.state.value
    console.log('this.state', this.state)

    this.addTextClear(inputValue, this.computeUserText.bind(this))

    if(this.bot) {
      let ans = await this.bot.getResult(inputValue, this.userData)
      this.addTextClear(ans.response, this.computeBotText.bind(this))
      console.log('ans',ans.response)
      return 'Testing'
    }
  }

  render() {
    return (<form id="mainForm" onSubmit={this.handleSubmit.bind(this)} style={{border:'none', autocomplete:"off"}}>
      {
        this.state.list.map((val, id) => {
          return <div key={id} style={{ color: val.color, borderColor: this.props.backgroundColor , border: 'none'}}>
            {val.symbol + ' ' + val.text}
          </div>
        })
      }
      <label style={{}}>{this.props.userSymbol}</label>
      <input type="text" name="name_" value={this.state.value} onChange={this.handleChange.bind(this)} style={{ backgroundColor: this.props.backgroundColor, color: this.props.userColor, border: "none", autocomplete:"off", outline:"none" }} />
    </form>)
  }
}

export default BotTerm