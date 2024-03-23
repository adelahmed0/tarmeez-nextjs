export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    },
  );
  const posts = await response.json();
  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        color: "black",
        margin: "10px auto",
      }}
    >
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </div>
  );
}
