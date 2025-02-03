interface CommunityProps {
  name: string;
  image: string;
  description: string;
  organization: string;
  repository: string;
}

export default function Community({
  name,
  image,
  description,
  organization,
  repository,
}: CommunityProps): JSX.Element {
  return (
    <div className="col-span-3 text-center">
      <div className="py-10">
        <img src={image} className="h-75 mt-10 mx-auto" />
        <h2 className="text-6xl mt-10">{name}</h2>
      </div>
      <div>
        <p className="p-5 text-2xl">{description}</p>
      </div>
      <div>
        <iframe
          className="mt-5 mb-5 mx-auto"
          src={`https://ghbtns.com/github-btn.html?user=${organization}&type=follow&count=true&size=large`}
          width="230"
          height="30"
          title="GitHub"
        ></iframe>
        <div className="mx-auto w-130 mb-5">
          <iframe
            className="float-left"
            src={`https://ghbtns.com/github-btn.html?user=${organization}&repo=${repository}&type=star&count=true&size=large`}
            width="170"
            height="30"
            title="GitHub"
          ></iframe>

          <iframe
            className="float-left"
            src={`https://ghbtns.com/github-btn.html?user=${organization}&repo=${repository}&type=watch&count=true&size=large&v=2`}
            width="170"
            height="30"
            title="GitHub"
          ></iframe>

          <iframe
            src={`https://ghbtns.com/github-btn.html?user=${organization}&repo=${repository}&type=fork&count=true&size=large`}
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
