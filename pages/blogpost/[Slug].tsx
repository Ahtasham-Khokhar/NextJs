import React from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react';
import { useEffect } from 'react';
import styles from "@/styles/Home.module.css";

type Slug = {
  slug: string;
  title: string;
  author: string;
  content: string;
};

const Slug = () => {

    const router = useRouter();
    const {slug} = router.query
    const [blog, setBlog] =  useState<Slug | null>(null);;
  
    useEffect(() => {
      if (!router.isReady) return;
      fetch(`http://localhost:3000/api/getblog?slug = ${slug}`)
        .then((response) => response.json())
        .then((parsed) => { // Parse the response as an array of Blog objects
          console.log(parsed);
          setBlog(parsed);
        }).catch((error)=>{
          console.error("Error Fetching Blog Post: ", error);
        });
    }, [router.isReady,slug]);
  


  return (
<>
          <div className={`${styles.blogitem} customBlog`}>
              <h1>{blog && blog.title}</h1>
              <hr />
            <h4>{ blog && blog.author}</h4>
            <p>{blog && blog.content}</p>

          </div>
      
</>
  )
};
export default Slug;