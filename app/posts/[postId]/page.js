import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJsx = (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "12rem",
      }}
    >
      Loading...
    </h1>
  );
  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
