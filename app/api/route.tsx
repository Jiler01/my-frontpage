import { NextResponse } from "next/server";
export function GET() {
  return NextResponse.json(learnings);
}

export const learnings = {
  Life: {
    title: <>Fisrt article !!</>,
    content: (
      <>
        The more I live, the more I learn. The more I learn, the more I realize,
        the less I know.
      </>
    ),
  },
  SiO2: {
    title: <>Second article !!</>,
    content: (
      <>
        The more I live, the more I learn. The more I learn, the more I realize,
        the less I know.
      </>
    ),
  },
};
