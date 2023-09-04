import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const content = {
    card1: {
      title: <>Learnings of life</>,
      text: (
        <>
          “The more I live, the more I learn. The more I learn, the more I
          realize, the less I know.” (Michel Legrand) But if each one learns,
          what happends to this knowledge after him ? This is why in this
          section, I will share quotes, learnings and ressources that, I think,
          would be useful to you, as they have been and might keep being to me
          in the future.
        </>
      ),
    },
    card2: {
      title: <>Learnings on SiO2</>,
      text: (
        <>
          Silicon dioxide, or Si02, is one if not the main compound used for the
          fabrication of processors, the heart of computers. <br /> I have a
          realtionship with the laters that has its roots in some childhood
          memories with my father, but since something like 2020 I started
          exploring its cosmos, with the ambition to make a job of it, one day.
          <br />
          In this section, I will share some ressources and explanation that
          could be useful to you, as they have been and might keep being to me
          in the future.
        </>
      ),
    },
  };
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
    <div className="grid place-items-center">
      <button className="btn m-10 glass" onClick={flip}>
        Other Learnings
      </button>
      <div
        className="m-10 h-max transform transition ease-in-out [transform-style:preserve-3d] duration-1000 [backface-visibility:hidden]"
        style={{ transform: deg }}
      >
        <div className="card glass shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{content["card1"]["title"]}</h2>
            <p>{content["card1"]["text"]}</p>
          </div>
        </div>
        <div className="absolute inset-0 [transform:rotateX(180deg)] [transform-style:preserve-3d] duration-1000 [backface-visibility:hidden]">
          <div className="card glass shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{content["card2"]["title"]}</h2>
              <p>{content["card2"]["text"]}</p>
            </div>
          </div>
        </div>
      </div>
      {/*Articles zone ---------------------------------------------------------------------------------*/}
    </div>
  );
}
