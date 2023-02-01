import { Link } from 'react-router-dom'

function Product(props){

  return (
    <div className="product">
    <Link to={`/posts/${props.id}/comments`}><h1>{props.title}</h1></Link>
    <p>{props.body}</p>
    </div>
  )
}

export default Product
