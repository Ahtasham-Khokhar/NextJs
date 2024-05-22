import React from 'react'

const Learn= () => {
   
  return (
    <>
     <style jsx>
        {`
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #f9f9f9;
            height: 100vh;
            color: #333;
        }
        .content {
            max-width: 800px;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .title {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: black;
            text-align: center;
          }
          .text {
            font-size: 1.2em;
            line-height: 1.6;
          }
          .text strong {
            color: black;
          }
          .list {
            margin-top: 20px;
            padding-left: 20px;
          }
          .list-item {
            margin-bottom: 10px;
          }
        `}
      </style>

      <div className="container">
        <div className="content">
          <h1 className="title">How to Learn JavaScript</h1>
          <p className="text">
            JavaScript is a versatile and powerful programming language that is essential for modern web development. Here are some steps to help you learn JavaScript effectively:
          </p>
          <ol className="list">
            <li className="list-item"><strong>Start with the Basics:</strong> Understand the syntax, variables, data types, and basic operators.</li>
            <li className="list-item"><strong>Practice Regularly:</strong> Coding is a skill best learned by doing. Practice by building small projects.</li>
            <li className="list-item"><strong>Explore Advanced Topics:</strong> Dive into more complex topics like asynchronous programming, closures, and prototypal inheritance.</li>
            <li className="list-item"><strong>Use Online Resources:</strong> Take advantage of online tutorials, courses, and documentation to supplement your learning.</li>
            <li className="list-item"><strong>Join a Community:</strong> Engage with other learners and experienced developers in forums and coding communities.</li>
          </ol>
          <p className="text">
            By following these steps,you will be well on your way to mastering JavaScript and building dynamic, interactive web applications.
          </p>
        </div>
      </div>
    </>
  )
}

export default Learn;