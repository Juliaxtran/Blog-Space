fetch('https://apis.scrimba.com/jsonplaceholder/posts')
.then(res => res.json())
.then(data => {
 let blogPost =  data.slice(0, 5)
 console.log(blogPost);
} )