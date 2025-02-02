interface CourseProps {
  name: string;
  link: string;
  top?: boolean;
}

export default function Course({ name, link, top }: CourseProps): JSX.Element {
  return (
    <p
      className={`text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] text-2xl bg-gray-800 p-3 opacity-80 max-w-130 ${top ? 'mt-10' : ''}`}
    >
      - {name} - 🎓{' '}
      <a href={link} target="_blank" className="underline hover:text-gray-400">
        program
      </a>{' '}
    </p>
  );
}
