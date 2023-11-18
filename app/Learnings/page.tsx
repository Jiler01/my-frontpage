"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Article from "./article";

export default function Page() {
  const [articles, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        throw error;
      });
  });
  // Flipping management -----------------------------------------------------------------------------
  const defaultDeg =
    useSearchParams().get("page") === "SiO2" ? "rotateX(180deg)" : "";
  const [deg, setDeg] = useState(defaultDeg);
  const flip = () => {
    switch (deg) {
      case "rotateX(180deg)":
        setDeg("");
        break;
      case "":
        setDeg("rotateX(180deg)");
    }
  };

  // HTML ---------------------------------------------------------------------------------------------
  return (
    <>
      <div className="grid place-items-center p-3">
        <button className="btn m-10 glass" onClick={flip}>
          Other Learnings
        </button>
        <div
          className="m-10 h-max transform transition ease-in-out [transform-style:preserve-3d] duration-1000 [backface-visibility:hidden]"
          style={{ transform: deg }}
        >
          <div className="card glass shadow-xl">
            <div className="card-body">
              <h1 className="card-title">Learnings of life</h1>
              <p>
                “The more I live, the more I learn. The more I learn, the more I
                realize, the less I know.” (Michel Legrand) But if each one
                learns, what happends to this knowledge after him ? This is why
                in this section, I will share quotes, learnings and ressources
                that, I think, would be useful to you, as they have been and
                might keep being to me in the future.
              </p>
            </div>
          </div>
          <div className="absolute h-max inset-0 [transform:rotateX(180deg)] [transform-style:preserve-3d] duration-1000 [backface-visibility:hidden]">
            <div className="card glass shadow-xl">
              <div className="card-body">
                <h1 className="card-title">Learnings on SiO2</h1>
                <p>
                  Silicon dioxide, or Si02, is one if not the main compound used
                  for the fabrication of processors, the heart of computers.{" "}
                  <br /> I have a realtionship with the laters that has its
                  roots in some childhood memories with my father, but since
                  something like 2020 I started exploring its cosmos, with the
                  ambition to make a job of it, one day.
                  <br />
                  In this section, I will share some ressources and explanation
                  that could be useful to you, as they have been and might keep
                  being to me in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {articles ? (
        <div className="grid p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Object.values(articles).map((article: any, index: number) => (
            <Article
              key={index}
              article={article}
              display={
                (deg == "" && article.category == "life") ||
                (deg != "" && article.category == "sio2") ||
                article.category == "" ||
                !article.category
                  ? "block"
                  : "none"
              }
            />
          ))}
        </div>
      ) : (
        <div className="grid place-items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </>
  );
}
