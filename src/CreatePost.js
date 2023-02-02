function CreatePost(){
  const submit_form_one = (event) => {
    const action = 'https://jsonplaceholder.typicode.com/posts'
    const title = document.getElementById('post_title').value
    const body = document.getElementById('post_body').value
    fetch(action, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then(
      function(json) {console.log(json)}
    )
  }

  return (
    <div>
    <label>Title</label><input type='text' name='post[title]' id='post_title' />
    <label>Body</label><input type='text' name='post[body]' id='post_body' />
    <button id='submit1' onClick={submit_form_one}>submit</button>
    </div>
  )
}

export default CreatePost
