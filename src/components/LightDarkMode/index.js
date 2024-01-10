import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    containerStyle: 'dark-main-bg-container',
    headingStyle: 'dark-heading',
    buttonStyle: 'dark-button',
    buttonText: 'Light Mode',
  }

  onButtonClick = () => {
    this.setState(prevState => {
      if (prevState.buttonText === 'Light Mode') {
        return {
          containerStyle: 'light-main-bg-container',
          headingStyle: 'light-heading',
          buttonStyle: 'light-button',
          buttonText: 'Dark Mode',
        }
      }
      return {
        containerStyle: 'dark-main-bg-container',
        headingStyle: 'dark-heading',
        buttonStyle: 'dark-button',
        buttonText: 'Light Mode',
      }
    })
  }

  render() {
    const {containerStyle, headingStyle, buttonStyle, buttonText} = this.state

    return (
      <div className="bg-container">
        <div className={containerStyle}>
          <h1 className={headingStyle}>Click to Change Mode</h1>
          <button
            className={buttonStyle}
            type="button"
            onClick={this.onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
