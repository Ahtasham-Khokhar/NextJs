import React, { useEffect, useState } from 'react';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

type Blog = {
  slug: string;
  title: string;
  author: string;
  content: string;
};

const BlogComponent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/api/blog")
      .then((response) => response.json())
      .then((parsed: Blog[]) => { // Parse the response as an array of Blog objects
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    <>
      <style jsx>
        {`
          .customBlogs {
            margin-top:40px;
            height:100vh;\
          }
          .customBlog {
            margin-top:20px;
            text-align: center;
          }
          h4 {
            font-size: 24px;
            margin-top:10px;
          }
          h3 {
            font-size: 28px;
            margin-top:10px;
          }
          p {
            font-size: 18px;
            width:45%;
            text-align: center;
            display: flex;
            justify-content: center;
            margin: 0px auto;
            margin-top:5px;
            
          }
        `}
      </style>
      
      <div className={`${styles.blogs} customBlogs`}>
        <h2>Popular Blogs</h2>
        {blogs.map((blog, index) => (
          <div key={index} className={`${styles.blogitem} customBlog`}>
            <Link href={`./blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <h4>{blog.author}</h4>
            <p>{blog.content.length > 140 ? blog.content.substring(0, 140) + '...' : blog.content}</p>

          </div>
        ))}
      </div>
    </>
  );
};

export default BlogComponent;
