function PostComment( { comment }){
  return (
    <div class="comment">
      <h2>{comment.name}</h2>
      <h3>{comment.email}</h3>
      <p>{comment.id}</p>
    </div>
  )
}
export default PostComment
