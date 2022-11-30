import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export function useFetchPosts() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        setError("Something Went Wrong !");
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);
  return { isLoading, error, posts };
}
