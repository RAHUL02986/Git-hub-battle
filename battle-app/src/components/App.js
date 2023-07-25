import React from 'react';
import Header from './Header';
import Tages from './Tages';
import AllLanguage from './AllLanguage';
import { Route, Routes } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      darkmode: false,
    };
  }

  handleMode() {
    this.setState((previousState) => ({
      darkmode: !previousState.darkmode,
    }));
  }
  render() {
    // if (!this.state.data) {
    //   return Loader;
    // }
    return (
      <>
        <div className={this.state.darkmode ? 'dark' : 'light'}>
          <Header
            darkmode={this.state.darkmode}
            handleMode={() => {
              this.handleMode();
            }}
          />
          <Tages />
          <Routes>
            <Route path="/" element={<AllLanguage />} />
          </Routes>
        </div>
      </>
    );
  }
}
export default App;
