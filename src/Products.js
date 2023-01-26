//https://jsonplaceholder.typicode.com/posts
import { useEffect, useState } from 'react'
import Product from './Product'

function Products(){
  const [posts, setPosts] = useState([])

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const myjson = response.json()
      setPosts(myjson)

    }

  })
  return (
    <div className="product">
      {
        posts.map(function(post){
          <Product title={post.title} body={post.body} />

        })
      }
    </div>
  )
}
