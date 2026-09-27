interface CommunityProps {
  name: string;
  image: string;
  description: string;
  organization: string;
  repository: string;
  extraClass?: string;
}

export default function Community({
  name,
  image,
  description,
  organization,
  repository,
  extraClass,
}: CommunityProps): JSX.Element {
  return (
    <div className={`md:col-span-3 col-span-6 text-center ${extraClass}`}>
      <div className="pt-8 pb-4">
        <img src={image} className="h-56 mx-auto" />
        <h3 className="text-4xl mt-6">{name}</h3>
      </div>
      <div>
        <p className="px-5 pb-3 text-lg">{description}</p>
      </div>
      <div>
        <iframe
          className="mt-2 mb-3 mx-auto"
          src={`https://ghbtns.com/github-btn.html?user=${organization}&type=follow&count=true&size=large`}
          width="230"
          height="30"
          title="GitHub"
        ></iframe>
        <div className="mx-auto mb-5 text-center">
          <div className="mx-auto w-75">
            <iframe
              className="float-left mx-2"
              src={`https://ghbtns.com/github-btn.html?user=${organization}&repo=${repository}&type=star&count=true&size=large`}
              width="75"
              height="30"
              title="GitHub"
            ></iframe>

            <iframe
              className="float-left mx-4"
              src={`https://ghbtns.com/github-btn.html?user=${organization}&repo=${repository}&type=watch&count=true&size=large&v=2`}
              width="75"
              height="30"
              title="GitHub"
            ></iframe>

            <iframe
              className="mx-4"
              src={`https://ghbtns.com/github-btn.html?user=${organization}&repo=${repository}&type=fork&count=true&size=large`}
              width="75"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
