import React, { Component } from 'react'

class SearchInput extends Component {
    constructor(props){
        super(props);

        this.state={Entry:''}
     
    }

  onFormSubmit=(event)=>{
      event.preventDefault();
      this.props.onSearchSubmit(this.state.Entry)
  }
  render() {
    return (
      <div className='ui segment'>
          <form className='ui form' onSubmit={this.onFormSubmit}>
              <div className='field'>
                  <div className='ui massive icon input'>
                    <input type='text' placeholder='Search' onChange={(event)=>this.setState({Entry:event.target.value})}
                    value={this.state.Entry}/>
                    <i className='search icon'></i>
                  </div>
              </div>
          </form>
      </div>
    )
  }
}
export default SearchInput;