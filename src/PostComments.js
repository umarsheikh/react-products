import { useState, useEffect } from 'react'

function PostComments(props){

const [comments, setComments] = useState([]);
useEffect(function(){
  fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    .then(response => response.json())
    .then(function(json){
      setComments(json)
    })
})
}

export default PostComments
