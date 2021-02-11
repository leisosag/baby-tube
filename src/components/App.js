import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './style.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('nirvana');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-lg-4 col-md-6">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
