fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(res => res.json())
  .then(data => {
    let blogPosts = data.slice(0, 5)
    let html = '';
    for (let post of blogPosts) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
  `
    }
    document.getElementById("blog-list").innerHTML = html;
    ;
  })



document.getElementById("new-post").addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
  const data = {
    title: postTitle,
    body: postBody
  }
  const jsonData = JSON.stringify(data);
  console.log(jsonData);

})

