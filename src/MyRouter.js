import { createBrowserRouter } from 'react-router-dom'
import PostComments from './PostComments'
import Products from './Products'
const router = createBrowserRouter([

  {path: '/posts/:id/comments', element: <PostComments />},
  {path: '/', element: <Products /> }
])

export default router;
