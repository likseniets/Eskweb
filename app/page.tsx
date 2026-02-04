import { Gamepad2, Github, Linkedin, Music, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen animated-background dark:bg-gray-400 dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <section className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <Image
              src="/ProfilePic.png"
              alt="Profile Picture"
              width={1148}
              height={1162}
              className="w-54 rounded-full text-white"
            />
            <div className="flex-1">
              <h1 className={`text-4xl mb-2 text-slate-900 dark:text-white`}>
                Stein-Eskil Hovde Losvar
              </h1>
              <p className={`text-xl text-slate-700 dark:text-gray-300 mb-4`}>
                Software Developer
              </p>
              <p className={`text-slate-700 dark:text-gray-300 max-w-2xl mb-4`}>
                Passionate developer with expertise in creating elegant
                solutions to complex problems. I blend technical excellence with
                creative thinking, driven by my interests in programming,
                gaming, and music.
              </p>
              <div className="flex gap-3">
                <Link
                  target="_blank"
                  href="https://github.com/likseniets"
                  className="flex items-center gap-2 px-2 py-2 bg-white text-black text-xs font-bold rounded-md border border-slate-300 hover:bg-gray-100 hover:scale-105 transition-all shadow-md"
                >
                  <Github className="w-4" />
                  GitHub
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/stein-eskil-losvar-491207199/"
                  className="flex items-center gap-2 px-2 py-2 bg-white text-black text-xs font-bold rounded-md border border-slate-300 hover:bg-gray-100 hover:scale-105 transition-all shadow-md"
                >
                  <Linkedin className="w-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="flex gap-4 flex-wrap">
            <div
              className={`flex items-center rounded-xl text-sm bg-purple-100 text-purple-700 hover:bg-purple-200 gap-2 px-4 py-2 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-800/50 dark:border dark:border-purple-500/30`}
            >
              <Terminal className="w-4" />
              Programming
            </div>
            <div
              className={`flex items-center rounded-xl text-sm bg-green-100 text-green-700 hover:bg-green-200 gap-2 px-4 py-2 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-800/50 dark:border dark:border-green-500/30`}
            >
              <Gamepad2 className="w-4" />
              Gaming
            </div>
            <div
              className={`flex items-center rounded-xl text-sm bg-purple-100 text-purple-700 hover:bg-purple-200 gap-2 px-4 py-2 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-800/50 dark:border dark:border-purple-500/30`}
            >
              <Music className="w-4" />
              Music
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2
            className={`text-2xl mb-6 text-slate-900 dark:text-white border-b-2 border-purple-300 dark:border-yellow-300/60 pb-2`}
          >
            Experience
          </h2>
          <div
            className={`p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3
                  className={`text-lg text-slate-900 dark:text-white font-semibold`}
                >
                  Junior Developer (Part-Time)
                </h3>
                <p className="text-slate-300">Arribatec Hospitality.</p>
              </div>
              <span className="text-slate-400">Aug. 2022 - Oct. 2022</span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-slate-300`}>
              <li>
                Here i worked in an English speaking team, using Scrum as our
                agile methodology
              </li>
              <li>
                Worked full-stack on a Self Checkin application for hotels,
                where our frontend was React and Backend in Node.js
              </li>
            </ul>
          </div>
          <div
            className={`p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3
                  className={`text-lg text-slate-900 dark:text-white font-semibold`}
                >
                  Junior Developer (Full-Time)
                </h3>
                <p className="text-slate-300">
                  Arribatec Cloud and Arribatec Hospitality.
                </p>
              </div>
              <span className="text-slate-400">Feb. 2022 - Aug. 2022</span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-slate-300`}>
              <li>
                After my Apprenticeship i continued working in Arribatec Cloud,
                working on several different projects
              </li>
              <li>
                After a little time in Arribatec Cloud i moved to Arribatec
                Hospitality in Oslo, where i worked on a more complex web
                application
              </li>
            </ul>
          </div>
          <div
            className={`p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3
                  className={`text-lg text-slate-900 dark:text-white font-semibold`}
                >
                  Junior Developer (Full-Time Apprenticeship)
                </h3>
                <p className="text-slate-300">Arribatec Cloud.</p>
              </div>
              <span className="text-slate-400">Aug. 2020 - Feb. 2022</span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-slate-300`}>
              <li>
                Learned working in teams using agile methodologies like scrum
              </li>
              <li>
                Worked on several projects where i learned to program in
                JavaScript/TypeScript in React
              </li>
              <li>
                Led one project for making the website of OlkWeb, here i learned
                a lot about time management
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
