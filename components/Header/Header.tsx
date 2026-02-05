"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { Menu, Music, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 dark:bg-gray-900/80 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
          >
            Eskweb
          </Link>
        </div>
        <div className="hidden md:flex gap-4 items-center">
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
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-gray-900/90">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <Link
              href="/"
              className="text-slate-700 hover:text-purple-600 transition-colors dark:text-slate-300 dark:hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/Music"
              className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-colors dark:text-slate-300 dark:hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
            >
              <Music className="size-4" />
              Music
            </Link>
            <div className="pt-1">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
