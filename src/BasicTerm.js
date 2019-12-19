import React, { Component } from 'react';
import initialize from './Chatbot'

let result = initialize()

class BotTerm extends Component {

  static defaultProps = {
    backgroundColor : 'black',
    botColor : 'green',
    userColor : 'orange',
    botSymbol : '',
    userSymbol : '>',
    startMessage : "Hello, I'm starting up.  The whole thing runs client side so nothing you say is sent to external servers.",
    finishedLoadingMessage : "Ok, I've finished loading my brain.  This is good. Yes this is a retro theme.",
    fontSize : "large"
  }

  constructor(props) {
    super(props)
    this.props = props
    
    this.state = {
      value: "",
      list: [],
      response: ''
    }

    this.userData = null
    this.bot = null

    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
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
    this.addTextClear(this.props.startMessage, this.computeBotText.bind(this))
    result.then((ans) => {
      this.userData = ans.userData
      this.bot = ans.bot
      this.conf = ans.conf
      console.log('ans.conf',ans.conf)
      this.addText(this.props.finishedLoadingMessage, this.computeBotText.bind(this))
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
      try {
      let ans = await this.bot.getResult(inputValue, this.userData)
      this.addTextClear(ans.response, this.computeBotText.bind(this))
      console.log('ans',ans.response)
      } catch(error) {
        console.log('error', error)
      }
      return 'Testing'
    }
  }

  render() {
    return (<form id="mainForm" autoComplete="off" onSubmit={this.handleSubmit.bind(this)} style={{backgroundColor: this.props.backgroundColor, border:'none', "fontSize" : this.props.fontSize}}>
      {
        this.state.list.map((val, id) => {
          return <div key={id} style={{ color: val.color, borderColor: this.props.backgroundColor , border: 'none'}}>
            {val.symbol + val.text}
          </div>
        })
      }
      <div style={{color: this.props.userColor, display: "inline-block", "textAlign": "right"}}>{this.props.userSymbol}</div>
      <input ref={this.textInput} autoFocus type="text" name="name" value={this.state.value} onChange={this.handleChange.bind(this)} 
        style={{ "fontSize" : this.props.fontSize, backgroundColor: this.props.backgroundColor, color: this.props.userColor, border: "none", autoComplete:"off", outline:"none" }} />
    </form>)
  }
}

export default BotTerm