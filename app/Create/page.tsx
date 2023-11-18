"use client";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState("none");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var toSend = "{";
    for (var i = 0; i < e.target.length - 1; i++) {
      toSend += `"${e.target[i].id}": "${e.target[i].value}" ${
        i != e.target.length - 2 ? "," : ""
      }`;
    }
    toSend += "}";
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: toSend,
      });
      const back = await response.json();
      setError(back.status == 200 ? "none" : "block");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div
        role="alert"
        className="alert alert-error"
        style={{ display: error }}
      >
        <span className="text-lg">
          Password not matching: you do not have the permissions to write on
          this database.
        </span>
      </div>
      <form className="grid place-items-center" onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="inputText"
            id="title"
          />

          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="inputText"
            id="description"
          />

          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="inputText"
            id="category"
          />

          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="inputText"
            id="tags"
          />

          <label className="label">
            <span className="label-text">Body</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Type here"
            id="body"
          ></textarea>

          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="inputText input-error"
            id="password"
          />
        </div>
        <button className="my-5 mx-auto btn btn-wide" type="submit">
          Create article !!
        </button>
      </form>
    </>
  );
}
