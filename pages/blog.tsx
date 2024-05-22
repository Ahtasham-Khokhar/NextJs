import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from 'next/link';


const Blog = () => {
  return (
    <>
  <style jsx>
    {
      `
      .customBlogs{
        display:flex;
        justify-content:center;
        flex-direction:column;
        height:100vh;
      }
      .customBlog{
        width: 100%;
        text-align: center;
      }
      h2{
        font-size:28px;
      }
      h3{
        font-size:24px
      }
      p{
        font-size:18px;
      }
      `
    }

  </style>

     <div className={`${styles.blogs} customBlogs`}>
          <h2>Popular Blogs</h2>
          <div className={`${styles.blogitem} customBlog`}>
            
            <Link href={"./blogpost/learn-java-script"}>
            <h3>How to Learn Javascript in 2027</h3>
            </Link>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
          <div className={`${styles.blogitem} customBlog`}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
          <div className={`${styles.blogitem} customBlog`}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
          <div className={`${styles.blogitem} customBlog`}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
        </div>
    </>
  )
}

export default Blog