import React, { Component } from 'react';
import request from 'superagent';
import NewsSearch from '../components/newsSearch';

class NewsSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    }
  }

  componentWillMount() {
    this.fetchSources().then((request) => (
      this.setState({
        sources: request.body.sources
      })
    ))
  }

  fetchSources() {
    return (
      request
        .get("https://newsapi.org/v1/sources?language=en")
    )
  }

  render() {
    return (
      <div>
        <NewsSearch sources={this.state.sources}/>
      </div>
    );
  }
}

export default NewsSearchContainer;