interface SocialLinkProps {
  readonly children: React.ReactNode;
  readonly url: string;
  readonly classNames?: string;
}

export default function SocialLink({ children, url, classNames }: SocialLinkProps): JSX.Element {
  return (
    <a href={url} target="_blank" className={`ml-3 hover:text-red-400 ${classNames}`}>
      {children}
    </a>
  );
}
