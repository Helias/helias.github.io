interface CourseLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const CourseLink: React.FC<CourseLinkProps> = ({ href, icon, text }): JSX.Element => {
  return (
    <span>
      <a
        href={href}
        target="_blank"
        className="drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] underline hover:text-gray-400"
      >
        {icon} {text}
      </a>
    </span>
  );
};

export default CourseLink;
