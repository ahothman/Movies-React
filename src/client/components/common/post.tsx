import React from "react";
import { PostType } from "../../../interfaces";

const Post = ({ title, imageUrl }: PostType) => {
  return (
    <div className="post">
      <img src={imageUrl} className="post-image" />
      <p>{title}</p>
    </div>
  );
};

export default Post;
