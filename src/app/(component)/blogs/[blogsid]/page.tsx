
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Data {
  id: number;
  title: string;
  body: string;
}
export default function BlogsId({ params }: any) {
  const id = params.blogsid;
  const [data, setdata] = useState<Data | null>(null);
  const route =useRouter();

  useEffect(() => {
    const getData = async () => {
      const reponse = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await reponse.json();
      //console.log(data);
      setdata(data);
    };
    getData();
  }, []);

  const gotoback =() => {
    route.back();
  }

  return (
    <>
      {data && (
        <div>
          <button style={{ backgroundColor: 'brown', color: 'white' }} onClick={gotoback}>back</button>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      )}
    </>
  );
}
