interface CourseLinkProps {
  href?: string;
  icon: React.ReactNode;
  text: string;
}

const CourseLink: React.FC<CourseLinkProps> = ({ href, icon, text }): JSX.Element => {
  if (!href) {
    return (
      <span className="text-gray-500 cursor-not-allowed">
        {icon} <span className="underline">{text}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      className="drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] hover:text-gray-400"
    >
      {icon} <span className="underline">{text}</span>
    </a>
  );
};

export default CourseLink;
