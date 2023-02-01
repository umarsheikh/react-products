import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PostComments(props){
  const params = useParams()
  const [comments, setComments] = useState([]);
  useEffect(function(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then(response => response.json())
      .then(function(json){
        setComments(json)
      })
  }, [])
  console.log(comments)
}

export default PostComments
