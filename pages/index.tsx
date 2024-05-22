import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import homeimage from "../public/home.avif"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  
  

      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="next js | Hunting Coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Script src="/sc.js"  strategy="lazyOnload" />
     

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
    
          <h1>Hunting <span>Coder</span></h1>
          
          <p>A Blog For Hunting Coder</p>
           </div>

           <Image className={styles.image}
            src={homeimage}
            width={230}
            height={150}
            alt="Home Image"
          />

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogitem}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to Learn Javascript in 2027</h3>
            <p>JavaScript is asynchronous Language and it is Logics Base </p>
          </div>
        </div>
      </main>
    </>
  );
}
