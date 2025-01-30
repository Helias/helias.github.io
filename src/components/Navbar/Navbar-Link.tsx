interface NavbarLinkProps {
  content: string;
  id?: string;
}

export default function NavbarLink({ content, id }: NavbarLinkProps): JSX.Element {
  return (
    <a
      href={`#${id}`}
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase"
      aria-current="page"
    >
      {content}
    </a>
  );
}
