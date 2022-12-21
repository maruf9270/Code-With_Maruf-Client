import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CommentCard from "./CommentCard";

const Comments = () => {
    const [comments,setComments] = useState([])
    useEffect(()=>{
        fetch("Comments.json")
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])
  return (
    <div>
      <section className="my-8  text-white">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            What our Students are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
         {
            comments.map((r,index)=><CommentCard data={r} key={index}></CommentCard>)
         }
        </div>
      </section>
    </div>
  );
};

export default Comments;
