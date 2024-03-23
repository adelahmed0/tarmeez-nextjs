import Link from "next/link";

export const metadata = {
  title: "Articles Page",
  description: "Articles page description",
};
export default function ArticlesPage() {
  return (
    <div>
      <h3>Articles Page</h3>
      <Link href="/posts">First Article</Link>
    </div>
  );
}
