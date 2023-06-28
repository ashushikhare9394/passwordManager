import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    channelInput: '',
    nameInput: '',
    passwordInput: '',
    contactList: [],
    input: '',
    isCheck: false,
  }

  onAdd = event => {
    event.preventDefault()
    const {channelInput, nameInput, passwordInput} = this.state
    const newList = {
      id: uuidv4(),
      channelInput,
      nameInput,
      passwordInput,
    }
    this.setState(prevState => ({
      contactList: [...prevState.contactList, newList],
      channelInput: '',
      nameInput: '',
      passwordInput: '',
    }))
  }

  onChangeChannel = event => {
    this.setState({channelInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearch = event => {
    this.setState({input: event.target.value})
  }

  onChange = event => {
    this.setState({
      isCheck: event.target.value,
    })
  }

  render() {
    const {contactList, input, isCheck} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="password-container">
          <div className="input-container">
            <h1 className="new-heading">Add New Password</h1>
            <form onSubmit={this.onAdd}>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                  htmlFor="website"
                />
                <input
                  type="text"
                  id="web"
                  placeholder="Enter website"
                  onChange={this.onChangeChannel}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                  htmlFor="username"
                />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                  htmlFor="password"
                />
                <input
                  type="text"
                  id="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="text">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="manager password"
            className="manager-image"
          />
        </div>
        <div className="password-container">
          <div className="navbar">
            <h1 className="new-heading">Your Password</h1>
            <p className="count">{contactList.length}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="searchImg"
            />
            <input type="search" onChange={this.onSearch} />
          </div>
          <hr className="horizontal-line" />
          <input type="checkBox" id="checkBox" onChange={this.onChange} />
          <label htmlFor="checkBox" className="show-password">
            Show Passwords
          </label>
          
            if(contactList.length === 0){
              <img 
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" 
              alt="no passwords" 
              className="noPasswordImg"
              /> 
              <p className="show-password">No Password</p>
          }
          else{
              <div>
              <ul>
                <li>
                    
                </li>
              
          </ul>
          </div>
          }
            
          
        </div>
      </div>
    )
  }
}
export default PasswordManager
