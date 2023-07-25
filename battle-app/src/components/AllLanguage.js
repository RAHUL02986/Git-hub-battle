import React from 'react';

class AllLanguage extends React.Component {
  constructor() {
    super();
    this.state = {
        data:null,
    };
  }
  componentDidMount() {
  return fetch(
      'https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories'
    )
      .then((res) => {
        res.json();
      })
      .then((data) => this.setState({ data: data }))
  }

  render() {
    console.log(this.state.data.)
    return (
        <>


</>
    )
  }
}

export default AllLanguage;
