import { createBrowserRouter } from 'react-router-dom'
import PostComments from './PostComments'
const router = createBrowserRouter([
  {path: '/posts/:id/comments', element: <PostComments />}
])

export default router;
