import React, { Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }

  handleResetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value += 1
    this.setState({ counters })
  }

  handleDelete = (ctrid) => {
    const ctr = this.state.counters.filter((c) => c.id != ctrid)
    this.setState({ counters: ctr })
  }
  handleReset = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value = 0
    this.setState({ counters })
  }
  render() { 
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'><Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onResetAll={this.handleResetAll} /></main>
      </React.Fragment>
      
    );
  }
}
 
export default App;
