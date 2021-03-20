import './App.css';
import XHRUpload from "@uppy/xhr-upload";
import Uppy from "@uppy/core";
import {Dashboard, useUppy} from "@uppy/react";
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import axios from 'axios';
import React from 'react';

function UppyUser(props) {
  const uppy = useUppy(() => {
    return new Uppy()
        .use(XHRUpload, { endpoint: '/upload' })
        .on("upload-success", (file, response) => {
          console.log(response);
          props.historyAppend(<a target={"_blank"} rel={"noreferrer noopener"} href={"/uploads/" + response.body.data.name}>{response.body.data.name}</a>)
        });
  })

  return <Dashboard theme={"dark"} uppy={uppy} />
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoggedIn: false, history: []};
  }

  historyAppend = function(item) {
    this.setState({history: [...this.state.history, item]});
  }.bind(this);

  async componentDidMount() {
   this.setState({isLoggedIn: (await axios.get("/isloggedin")).data || false});
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div className={"uppy"}>
        <UppyUser historyAppend={this.historyAppend} />
        <div className={"history"}>
          {this.state.history}
        </div>
      </div>;
    } else {
      return <div className={"form"}>
        <form action={"/login"} method={"post"}>
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} name={"password"} type={"password"} />
          <input type={"submit"} value={"Log In!"} />
        </form>
      </div>
    }
  }
}

export default App;
