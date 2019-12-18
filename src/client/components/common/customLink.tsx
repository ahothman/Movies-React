import React from "react";
import { PostType } from "../../../interfaces";

const CustomLink = ({ title, href }) => {
  return (
    <a className="custom-link" href={href}>
      <div className="custom-link-body"></div>
      <p>{title}</p>
    </a>
  );
};

export default CustomLink;
