import Todo from "../components/Todo.jsx";
import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const postsJSX = posts.map((post) => (
    <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
      <div
        key={post.id}
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          margin: "10px",
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Link>
  ));
  console.log(posts);
  return (
    <div>
      <h1>Posts Page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}
