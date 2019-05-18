import React from "react";
import ReactDOM from "react-dom";

class Probe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Probe mounted');

  }
  componentWillUnmount() {
    console.log('Probe unmount');
  }

  render() {
    return (<div></div>);
  }
};


class Btn extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('Btn mounted');

  }
  componentWillUnmount() {
    console.log('Btn unmount');
  }

  render() {
    return this.props.hidden ? null :
       (
        <div>
          <Probe />
          <button onClick={(() => {
            console.log('clickedd!');
            this.props.onClick();
          })}>
            Woo {this.props.count || 0}
          </button>
        </div>
       );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.interval = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }
  render() {
    return <div>Hello {this.props.name} <Btn hidden={this.state.count % 10 >= 5} count={this.state.count} onClick={() => { this.setState({count: (this.state.count +
    1)}); }}/></div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane!" />, mountNode);

