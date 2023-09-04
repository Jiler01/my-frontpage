import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [deg, setDeg] = useState("");
  const flip = () => {
    if (deg === "rotateY(180deg)") {
      setDeg("");
    } else {
      setDeg("rotateY(180deg)");
    }
  };
  return (
    <div className="grid place-items-center">
      <div
        className="m-10 transform transition ease-in-out [transform-style:preserve-3d] duration-1000 [backface-visibility:hidden]"
        style={{ transform: deg }}
      >
        <div className="card glass shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link href="./of-life" className="btn btn-primary">
                Discover ✨
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [transform-style:preserve-3d] duration-1000 [backface-visibility:hidden]">
          <div className="card glass shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link href="./on-SiO2" className="btn btn-secondary">
                  Discover ✨
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn glass m-2" onClick={flip}>
        Other Learnings
      </button>
    </div>
  );
}
