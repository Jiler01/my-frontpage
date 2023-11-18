"use client";
import { useState, useEffect } from "react";
import { couldStartTrivia } from "typescript";

export default function Page({ params }: { params: { idOnOne: string[] } }) {
  const [article, setData] = useState(null);
  useEffect(() => {
    fetch(`/api/${params.idOnOne[0]}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        throw error;
      });
  });
  return ((article: any) =>
    article ? (
      <div className="my-0 mx-auto p-10 ">
        <div className="w-full rounded-lg glass p-7 shadow-lg text-center">
          <div className="text-4xl">{article.title}</div>
          <div className="divider"></div>
          <div className="text-xl">{article.description}</div>
          <div className="mt-3 flex flex-row justify-center">
            {article.tags &&
              JSON.parse(article.tags).map((tag: any, index: any) => (
                <div className="badge badge-outline" key={index}>
                  {tag}
                </div>
              ))}
          </div>
          <div className="divider"></div>
          <div>{article.body}</div>
        </div>
      </div>
    ) : (
      <div className="grid h-full place-items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    ))(article);
}
