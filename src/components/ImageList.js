import React from 'react'

export default function ImageList(props) {
    const images=props.images.map((items, key)=>{
        return(<img src={items.webformatURL} alt='images from search term' key={items.id}/>)
    })
  return (
    <div>{images}</div>
  )
}
