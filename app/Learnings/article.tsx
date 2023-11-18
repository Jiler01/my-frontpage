import Link from "next/link";

export default function Article(props: any) {
  return (
    <Link href={`/Learnings/${props.article.id}/${props.article.title}`}>
      <div
        className="card glass shadow-lg m-5"
        style={{
          display: props.display,
        }}
      >
        <div className="card-body">
          <h2 className="card-title">{props.article.title}</h2>
          <p>{props.article.description}</p>
          <div className="flex flex-row justify-center">
            {props.article.tags &&
              JSON.parse(props.article.tags).map((tag: any, index: any) => (
                <div className="badge badge-outline" key={index}>
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
