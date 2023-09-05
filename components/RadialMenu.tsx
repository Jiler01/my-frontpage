"use client";

import Link from "next/link";

export default function Menu(props: any) {
  return (
    <div className="bg-transparent">
      <span className="radialspan">
        <span className="radialspan"></span>
      </span>
      <div className="radialwrap">
        <Link className="radialpart" href={props.links[1]}>
          <div
            className="radialbg"
            style={{ backgroundImage: "url(" + props.images[1] + ")" }}
          ></div>
        </Link>
        <Link className="radialpart" href={props.links[2]}>
          <div
            className="radialbg"
            style={{ backgroundImage: "url(" + props.images[2] + ")" }}
          ></div>
        </Link>
        <Link className="radialpart" href={props.links[3]}>
          <div
            className="radialbg"
            style={{ backgroundImage: "url(" + props.images[3] + ")" }}
          ></div>
        </Link>
        <Link className="radialpart" href={props.links[4]}>
          <div
            className="radialbg"
            style={{ backgroundImage: "url(" + props.images[4] + ")" }}
          ></div>
        </Link>
        <Link className="radialpart" href={""}>
          <div
            className="radialbg"
            style={{ backgroundImage: "url(" + props.images[0] + ")" }}
          ></div>
        </Link>
      </div>
    </div>
  );
}
