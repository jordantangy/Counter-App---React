import React, { Component } from 'react'

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  }

  constructor(props) {
    super(props)
  }

  render() {
    let badgeColor = this.getBadgeColor()
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={badgeColor}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onReset(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Delete
        </button>
      </div>
    )
  }
  getBadgeColor() {
    let badgeColor = 'badge m-2 badge-'
    badgeColor += this.props.counter.value <= 0 ? 'warning' : 'primary'
    return badgeColor
  }

  formatCount() {
    const { value: count } = this.props.counter
    return count == 0 ? 'Zero' : count
  }

  renderTags() {
    if (this.state.tags.length == 0) return <p>There are no tags</p>

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    )
  }
}

export default Counter
