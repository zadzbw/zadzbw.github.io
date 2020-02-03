import React from 'react'

export default class Test extends React.PureComponent {
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state

    return (
      <>
        <p>{count}</p>
        <button onClick={() => this.setState((s) => ({ count: s.count + 1 }))}>add</button>
      </>
    )
  }
}
