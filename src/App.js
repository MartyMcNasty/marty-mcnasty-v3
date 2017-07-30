import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import NewPost from './newpost.js';
import NewTextPost from './new-text-post.js';
import logo from './Marty-17.svg';
import moment from 'moment';
import './App.css';
import button from './imgs/push-to-start.svg';



class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '60px',
    height: 'auto',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#666',
    padding: '2.5em 0',
    fontSize: '1.15em'

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    background: '#fff',
    color: '#b8b7ad',
    zIndex:'2',
    width:'100%'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

    return (
      <div className="App">
      <div className="artboard"  id="outer-container">
      <Menu right styles={styles} width={'700px'} customBurgerIcon={ <img src={button} alt="open art board" /> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <main id='page-wrap'>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </main>
    </Menu>
</div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="circle"></div>
        </div>
        <div className="content">
          <NewTextPost
            postTime={ moment().format('LT')}
            postDate={moment().format('l')}
            postTitle = "Against All Odds"
            postText=" In 2010, I had no job, no education, and no money. I thought it was all over,
            and reasonably so. Even though I had nothing, I never lost my will to succeed.
            I had family, I had friends and I had ambition. It turns out thats all I needed. With th
            support of a few of those friends and some new ones I began to express myself creatively.
            With the help of my family I found stability. I found strength in my ambition, allowing me
            to overcome my obstacles."
            postTextTwo="I rather not retell the whole story, thats better left for the inevitable documentary that will follow,
            after I realize some of my bigger dreams. I want to thank everyone who has ever supported me.
            I'll never forget about you, or your contribution to my success. One day, I intend
            to return the favor."
            postTextThree="So after 7 years of blood, sweat and tears, here we are. The journey has still only just began.
            We aren't even 10 years in, and I say we because I damn sure ain't get here alone!
            I assure you by the tenth year, my reach will extend from local, to regional, and eventually GLOBAL.
            With all that said ...WELCOME TO MARTY MCNASTY DOT COM version 3.0! "

            />
        </div>
        <div className="Footer" >
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}

export default App;
