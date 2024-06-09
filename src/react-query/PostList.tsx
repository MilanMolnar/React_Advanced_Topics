import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const [userID, setUserID] = useState<number>();
  const { data, error, isLoading } = usePosts(userID);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  let users = [
    { name: "Bence", id: "1" },
    { name: "Miklós", id: "2" },
    { name: "Dániel", id: "3" },
  ];

  return (
    <>
      <select
        onChange={(event) => setUserID(parseInt(event.target.value))}
        value={userID}
        className="form-select mb-3"
      >
        <option value="0"></option>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
