import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { Music } from "lucide-react";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 dark:bg-gray-900/80 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
          >
            Eskweb
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="text-slate-700 hover:text-purple-600 transition-colors dark:text-slate-300 dark:hover:text-purple-400"
          >
            Resume
          </Link>
          <Link
            href="/Music"
            className={`flex items-center gap-1 text-slate-700 hover:text-purple-600 transition-colors dark:text-slate-300 dark:hover:text-purple-400`}
          >
            <Music className="size-4" />
            Music
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
