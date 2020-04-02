import React from 'react';
import './App.css';

//sets height of header on this, display is switched to regular display, 

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      menu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({menu: !this.state.menu})
    console.log(this.state.menu)
  }

  render() {
    return (
      <div>
        <header className={`header ${this.state.menu ? 'menu-open' : null}`}>          
            <div className='home'>Start Bootstrap</div>
            <ul className={`nav-selection`}>
              <li className='nav-buttons'>SERVICES</li>
              <li className='nav-buttons'>PORTFOLIO</li>
              <li className='nav-buttons'>ABOUT</li>
              <li className='nav-buttons'>TEAM</li>
              <li className='nav-buttons'>CONTACT</li>
            </ul>
            <button
              className='menu-button hidden'
              onClick={this.toggleMenu}>
                Menu
            </button>
        </header>
        <section className='main-section'>
          <h2 className='main-welcome'><i>Welcome To Our Studio!</i></h2>
          <h1 className='main-tag'>IT'S NICE TO MEET YOU</h1>
          <button className='main-button'>TELL ME MORE</button>
        </section>
      </div>
    );
  }
}


export default App;
