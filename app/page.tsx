import RadialMenu from "@/components/RadialMenu";

export default function Page() {
  return (
    <>
      <RadialMenu
        links={[
          "",
          "/Learnings",
          "/Computers-and-me",
          "/Contact-me",
          "/Who-am-I",
        ]}
        images={[
          "/Avatar.jpg",
          "/Blog.jpg",
          "/Coding.jpg",
          "/Contact.jpg",
          "/About.jpg",
        ]}
        className="mt-0 mb-0 mr-auto ml-auto w-[50%] block"
      />
    </>
  );
}
