import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import MainContainer from "../components/MainContainer/MainContainer";
import Post from "../components/Post/Post";
import { useAuth } from "../hooks/useAuth";
import { useFetchPosts } from "../hooks/useFetchPosts";

export default function Posts() {
  const { isLoading, error, posts } = useFetchPosts();
  const { user } = useAuth();

  if (!user && posts) return <Navigate to={"/"} />;

  return (
    <MainContainer title="Posts">
      <div className="posts-container">
        {isLoading ? (
          <Loader />
        ) : (
          posts?.map((post, i) => {
            return (
              <Post key={i} id={post.id} title={post.title} body={post.body} />
            );
          })
        )}
        {error && (
          <div className="errorFetch">
            <p>{error}</p>
          </div>
        )}
      </div>
    </MainContainer>
  );
}
