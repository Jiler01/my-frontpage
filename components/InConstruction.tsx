"use client";
import Link from "next/link";

export default function InConstruction() {
  return (
    <div className="absolute top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%]">
      <Link
        className="shadow-black shadow-xl btn bg-cover text-white"
        style={{
          backgroundImage: 'url("/Construction.jpg")',
          textShadow: "0 0 3px black",
        }}
        href={"/"}
      >
        In construction
        <br />
        Click here to get to lobby
      </Link>
    </div>
  );
}
