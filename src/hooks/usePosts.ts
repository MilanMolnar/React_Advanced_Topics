import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userID: number | undefined) => {
  const fetchPosts = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userID,
        },
      })
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    //              /users/1/posts dependency chain
    queryKey: userID ? ["users", userID, "posts"] : ["posts"],
    queryFn: fetchPosts,
    staleTime: 60 * 1000, // 60 sec
  });
};
export default usePosts;
