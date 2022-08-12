import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ArrayList from "./ArrayList";
import Clock from "./Clock";

//
// https://api.unsplash.com/

class App extends React.Component {
  state = { images: [] };
  onSeachSubmit = async (term) => {
    // async/await
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID MkQhJo4Dd8RXbeBIEwW9he7sE_uwgpqBpkgSg_u9vzs",
      },
      params: { query: term, per_page: 20 },
    });
    this.setState({ images: response.data.results });
    // console.log(response.data.results);

    //Promise syxtax
    // axios.get( 'https://api.unsplash.com/search/photos',
    // {
    //   headers: {Authorization: 'Client-ID MkQhJo4Dd8RXbeBIEwW9he7sE_uwgpqBpkgSg_u9vzs'
    //   },
    //   params:{query: term}
    // }
    // ).then(
    //   (response) => {
    //     console.log(response.data.results);
    // } )
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* <Clock/> */}
        <SearchBar onSubmit={this.onSeachSubmit} label="Picture Search" />
        <ImageList images={this.state.images} />
        <ArrayList />
      </div>
    );
  }
}

export default App;
