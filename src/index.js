import React from "react";
import { render } from "react-dom";

class ReactEmailScrapingProtect extends React.Component {
  constructor(props) {
    super(props);
    const { mask } = props;
    this.state = {
      email: mask || "-@-"
    };
  }

  componentDidMount() {
    const { timeout, email } = this.props;
    setTimeout(() => {
      this.setState({
        email: email
      });
    }, timeout || 100);
  }

  render() {
    const { email } = this.state;
    return <div>{email}</div>;
  }
}

const email = "some@email.com";

const App = () => (
  <div>
    <ReactEmailScrapingProtect
      timeout={1000}
      mask={email.split("").map(char => (char === "@" ? "@" : "."))}
      email={email}
    />
  </div>
);

render(<App />, document.getElementById("root"));
