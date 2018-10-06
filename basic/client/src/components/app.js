import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
		WebAssembly.instantiateStreaming(fetch("http://localhost:3000"), go.importObject).then(async (result) => {
      go.run(result.instance)
      this.setState({ isLoading: false })
    });
  }
  render() {
    return this.state.isLoading ? <div>Loading</div> :  <div><button onClick={sayHi}>Click to say Hi in console!</button></div>
  }
}
