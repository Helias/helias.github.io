import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import TelegramIcon from '@mui/icons-material/Telegram';
import SocialLink from './SocialLink';

export default function About(): JSX.Element {
  return (
    <div id="about">
      <div className="grid grid-cols-12 mb-20">
        <div className="ml-[5vw] text-center md:col-span-5 col-span-12">
          <h2 className="text-6xl mt-20 text-gray-600 underline underline-offset-15">About</h2>
          <img className="rounded-full h-75 mt-10 mx-auto border" src="about/Stefano.png" />
          <div className="mt-10 flex justify-center items-center">
            <SocialLink url="mailto:stefanoborzi32@gmail.com">
              <EmailIcon sx={{ fontSize: 50 }} />
            </SocialLink>
            <SocialLink url="https://t.me/Helias" classNames="text-sky-500">
              <TelegramIcon sx={{ fontSize: 50 }} />
            </SocialLink>
            <SocialLink url="https://github.com/Helias">
              <i className="devicon-github-original align-middle mr-2 text-5xl"></i>
            </SocialLink>
            <SocialLink url="https://linkedin.com/in/stefanoborzi" classNames="text-blue-900">
              <LinkedInIcon sx={{ fontSize: 50 }} />
            </SocialLink>
            <SocialLink url="https://scholar.google.com/citations?user=80n8dycAAAAJ&hl=it">
              <SchoolIcon sx={{ fontSize: 50 }} />
            </SocialLink>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <a
              className="bg-gray-800 px-12 py-5 font-medium text-white hover:text-red-400"
              href="StefanoBorzi-CV.pdf"
            >
              <DescriptionIcon fontSize="medium" className="align-bottom" /> Download Resume
            </a>
          </div>
        </div>
        <div className="mt-40 md:col-span-6 col-span-12 text-2xl text-gray-600 px-10">
          <p>I'm a software engineer who started programming for fun at the age of 12.</p>
          <p className="mt-10">
            I have several years of working experience mostly using web technologies like
            TypeScript/JavaScript, Angular, React, Next.js, Tailwindcss, Node.js, Python, Bootstrap,
            HTML, CSS/SCSS, C++, PHP, and Laravel.
          </p>
          <p className="mt-10">
            In my spare time, I manage two opensource communities that I have founded{' '}
            <a
              className="underline hover:text-black"
              href="https://github.com/azerothcore"
              target="_blank"
            >
              AzerothCore
            </a>{' '}
            and{' '}
            <a
              className="underline hover:text-black"
              href="https://github.com/unict-dmi"
              target="_blank"
            >
              UNICT-DEVS
            </a>
            .
          </p>
          <p className="mt-10 text-center">
            <img className="inline-block align-middle mr-3" src="about/opensource.png" width="32" />
            I am really passionate about opensource and Linux.{' '}
            <img className="inline-block align-middle" src="about/linux-tux.png" width="32" />
          </p>
        </div>
      </div>
    </div>
  );
}
