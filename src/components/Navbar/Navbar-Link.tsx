interface NavbarLinkProps {
  content: string;
}

export default function NavbarLink(props: NavbarLinkProps): JSX.Element {
  return (
    <a
      href="#"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      aria-current="page"
    >
      {props.content}
    </a>
  );
}
