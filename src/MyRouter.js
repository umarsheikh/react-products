import { createBrowserRouter } from 'react-router-dom'
import PostComments from './PostComments'
import Products from './Products'
import CreatePost from './CreatePost'
const router = createBrowserRouter([

  {path: '/posts/:id/comments', element: <PostComments />},
  {path: '/', element: <Products /> },
  {path: '/posts/create', element: <CreatePost />}
])

export default router;
