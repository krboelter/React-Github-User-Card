import React from 'react';
import Card from './Components/Card';
import CardList from './Components/CardList';
import Axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      personalData: {},
      userData: []
    }
  }

  componentDidMount() {
    Axios.get(`https://api.github.com/users/krboelter`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          personalData: res.data
        })
        Axios.get(`https://api.github.com/users/krboelter/following`)
          .then(res => {
            // console.log(res.data)
            this.setState({
              userData: res.data
            })
          })
          .catch(err => console.log(err, "Oops... something went wrong..."))
      })
      .catch(err => console.log(err, "There was an error..."))
  }

  handleConsole = () => {
    console.log(this.state.userData)
  }

  render() {
    return (
      <div className="container">
        <Card user={this.state.personalData.login} url={this.state.personalData.avatar_url} />
        <CardList user={this.state.userData} />
        <button onClick={this.handleConsole}>Show in Console</button>
      </div>
    )
  }
}

export default App