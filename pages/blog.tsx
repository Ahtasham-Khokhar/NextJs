import React, { useEffect, useState } from 'react';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

type Blog = {
  slug: string;
  title: string;
  author: string;
  content: string;
  allblogs: Blog[];
};

const BlogComponent = ({allblogs}:Blog) => {
  const [blogs, setBlogs] = useState<Blog[]>(allblogs);
  
 
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

//Server Side Rendering
export async function getServerSideProps() {
  // Fetch data from external API
  
   const data = await fetch("http://localhost:3000/api/blog")
    const allblogs =await data.json()
  // Pass data to the page via props
  return { props: { allblogs} }
}

export default BlogComponent;
