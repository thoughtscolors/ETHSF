import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Bar from './GraphBar'
import SideBar from './SideBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const bars = [1.24,3.22,4.44,5,6.53,7.50,8.9,9.1,9.4,12.5]

class App extends Component {
  state = {
    randomNumber: 376.34
  }

componentDidMount = () => {
    setInterval(this.countUp, 1000)
}

countUp = () => {
  let newNumber = (Math.floor(Math.random() * 1000) / 100)
  let randomNumber = this.state.randomNumber + newNumber
  this.setState({ randomNumber })
}


componentWillUnmount = () => {
    clearInterval(this.interval)
}

  render() {

    let {randomNumber} = this.state


    let barsSortedByLargest = bars.sort((a,b) => b > a)
    return (
      <div style={styles.rowContainer}>
        <SideBar />
        <div style={styles.container}>
          <div style={styles.title}>Total Collected by</div>
          <div style={styles.title}>Community Since</div>
          <div style={styles.title}>Oct 1, 2018</div>
          <div style={styles.dividerSmall}></div>
          <div style={styles.title}>{randomNumber + 'ETH'}</div>
          <img style={styles.ethLogo} src='https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png'/>
          <div style={styles.title}>Your Contribution</div>
          <div style={styles.dividerSmall}></div>
          <div style={styles.title}>{1.24 + 'ETH'}</div>
          <img style={styles.ethLogo} src='https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png'/>
          <div style={styles.title}>Most Generous Contributors</div>
          <div style={styles.barContainer}>
            {barsSortedByLargest.map((ethAmt,i) => {
              let width = (ethAmt / barsSortedByLargest[0]) * 100
            return <Bar width={`${width}%`} key={i} amt={ethAmt}/>
          })}
          </div>
        </div>

      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2em',
    marginRight: '1em'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh'
  },
  barContainer: {
    width: '80vw',
    margin: 'auto',
  },
  title: {
    fontSize: '2em',
    color: '#232323',
    textAlign: 'center'
  },
  dividerSmall: {
    width: '20vw',
    border: '1px solid #232323',
    marginTop: '1em',
    marginBottom: '1em'
  },
  ethLogo: {
    width: '100px',
    height: '100px'
  }
}
