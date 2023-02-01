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
  return (
    <div class="comments">
      {
        comments.map(function(comment){
          return (
          <Comment comment = { comment } />
          )
        })
      }
    </div>
  )
}

export default PostComments
