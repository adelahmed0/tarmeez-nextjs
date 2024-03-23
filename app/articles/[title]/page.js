export default function ShowArticlePage(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.params.title}</h1>
      <h3>Show Article Page</h3>
    </div>
  );
}
