import React from "react";
import { render } from "react-dom";

class ReactScrapingProtection extends React.Component {
  constructor(props) {
    super(props);
    const { mask } = props;
    this.state = {
      text: mask || "-@-"
    };
  }

  componentDidMount() {
    const { timeout, text } = this.props;
    setTimeout(() => {
      this.setState({
        text: text
      });
    }, timeout || 100);
  }

  render() {
    const { text } = this.state;
    return <div>{text}</div>;
  }
}

const email = "some@email.com";

const App = () => (
  <div>
    <ReactScrapingProtection
      timeout={1000}
      mask={email.split("").map(char => (char === "@" ? "@" : "."))}
      text={email}
    />
  </div>
);

render(<App />, document.getElementById("root"));
