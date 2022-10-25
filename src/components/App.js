import React, { Component } from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={images:[]}
    this.onSearchSubmit=this.onSearchSubmit.bind(this);
    console.log(process.env)
  }

  async onSearchSubmit(entry){
  const response=await  axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}=${entry}&image_type=photo`)
  this.setState({images:response.data.hits})
 

  }
  render() {
    return (
      <div ui container style={{marginTop:'30px'}}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}
