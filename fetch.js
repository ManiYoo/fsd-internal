fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((posts) => {
    for (let post of posts) {
      console.log(post);
    }
  });
