import { createBrowserRouter } from 'react'
import PostComments from './PostComments'
const router = createBrowserRouter([
  {path: '/posts/:id/comments', element: <PostComments />}
])

export default router;
