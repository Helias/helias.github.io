import { ReactTyped } from 'react-typed';

export default function TypedText(): JSX.Element {
  return (
    <ReactTyped
      strings={[
        'an open-source developer',
        'a tech enthusiast',
        'a web developer',
        'a software engineer',
        'a full-stack developer',
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop
    />
  );
}
