export default function Page() {
  return (
    <>
      <Card />
    </>
  );
}

function Card() {
  const badges = [
    [
      "Human",
      "To any non-human reading these lines, humans are the current apex specie of this planet, andthere is so much to tell about ourselves, but to make it shorter, I would say that our history is made of feathers and blades, our present of metal and paper, and our future is most likely to be made either of fire, or of water.",
    ],
    [
      "Student",
      "Grade 12 of French Baccalaureat, specialization in CS and Maths (expert option), with a Physics and Chimistry background",
    ],
    ["", ""],
  ];
  return (
    <div className="hero min-h-screen bg-base">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/Avatar.jpg" className="max-w-sm shadow-2xl rounded-full" />
        <div>
          <h1 className="text-5xl font-bold">Rehan Jiva Lila</h1>
          <p className="py-6 ">
            Who am I ? How can I even answe this question ?<br />
            Anyway, here are some labels that could give an overviwe of an
            answer :
          </p>
          <div
            className="flex flex-row justify-evenly w-full flex-wrap"
            id="about-labels-div"
          >
            {badges.map((x) => (
              <div className="tooltip tooltip-bottom" data-tip={x[1]}>
                <div>{x[0]} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
