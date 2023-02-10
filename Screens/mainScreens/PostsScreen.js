import React, {useState, useEffect} from "react";
import { PostsList } from "../../components/postsList";

const Posts = ({ route }) => {
  const [posts, setPosts] = useState([])
  // console.log(route.params);

  useEffect(() => {
    if (route.params) {
       setPosts((prevState) => [...prevState, route.params])
    }
   
  }, [route.params])
  // console.log(posts);
  return (
    <PostsList posts={ posts} />
  );
};


export default Posts;