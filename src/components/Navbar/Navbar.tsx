import GitHubIcon from '@mui/icons-material/GitHub';
import NavbarLink from './Navbar-Link';

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavbarLink content="Home" />
                  <NavbarLink content="About" />
                  {/* <NavbarLink content="Experience & Education" /> */}
                  <NavbarLink content="Skills & Projects" />
                  <NavbarLink content="Opensource" />
                  <NavbarLink content="Teachings" />
                  <NavbarLink content="Publications" />
                  <NavbarLink content="Events" />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <a href="https://github.com/Helias" target="_blank">
                  <GitHubIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
