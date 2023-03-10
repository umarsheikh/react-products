import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PostComment from './PostComment'

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
      <Link to='/'>Back</Link>
      {
        comments.map(function(comment){
          return (
          <PostComment comment = { comment } />
          )
        })
      }
    </div>
  )
}

export default PostComments
