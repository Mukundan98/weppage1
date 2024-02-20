  "use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface posts{
  title: string,
  body: string,
  id:number
}

function page  () {
   const [posts, setblog]= useState([] as posts[]);

   useEffect(() => {
      const getdata = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const valuedata = await response.json();
      const data = valuedata.posts;
      setblog(data);
       } 
      getdata();
   })
   return (
     <div>
       {posts.map((obj:posts) => {
         return (
           <Link href={`/blogs/${obj.id}`} key={obj.id}>
             <div style={{backgroundColor:'lightgreen',marginBottom:'12px'}}>
             <h1>{obj.title}</h1>
             <p>{obj.body}</p>
             </div>
           </Link>
         );
       })}
     </div>
   );
}

export default page


