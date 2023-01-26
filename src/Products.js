//https://jsonplaceholder.typicode.com/posts
import { useEffect, useState } from 'react'
import Product from './Product'

function Products(){
  const [posts, setPosts] = useState([])

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const myjson = await response.json()
      setPosts(myjson)
      console.log(posts)

    }
    getData()
  }, [])
  return (
    <div className="products">
      {

        posts.map(function(post){
          return <Product title={post.title} body={post.body} />

        })
      }
    </div>
  )
}

export default Products
