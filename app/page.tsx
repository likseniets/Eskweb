import { Gamepad2, Github, Linkedin, Music, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen animated-background dark:bg-gray-400 dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:py-24">
        <section className="mb-16">
          <div className="grid sm:grid-flow-col grid-rows-2 grid-cols-3 sm:grid-cols-4 gap-4 lg:gap-0 mb-5">
            <Image
              src="/ProfilePic.png"
              alt="Profile Picture"
              width={1148}
              height={1162}
              className="sm:row-span-2 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full object-cover text-white"
            />
            <div className="col-span-2 sm:col-span-3 flex flex-col justify-center">
              <h1
                className={`text-3xl sm:text-4xl mb-2 text-slate-900 dark:text-white`}
              >
                Stein-Eskil Hovde Losvar
              </h1>
              <p
                className={`text-lg sm:text-xl text-slate-700 dark:text-gray-300 mb-4`}
              >
                Software Developer
              </p>
            </div>
            <div className="col-span-3">
              <p className={`text-slate-700 dark:text-gray-300 max-w-2xl mb-4`}>
                Passionate developer with expertise in creating elegant
                solutions to complex problems. I blend technical excellence with
                creative thinking, driven by my interests in programming,
                gaming, and music.
              </p>
              <div className="flex flex-wrap gap-3">
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
        {/* Experience */}
        <section className="mb-16">
          <h2
            className={`text-xl sm:text-2xl mb-6 text-slate-900 dark:text-white border-b-2 border-purple-300 dark:border-yellow-300/60 pb-2`}
          >
            Experience
          </h2>
          <div
            className={`p-5 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
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
            className={`p-5 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
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
            className={`p-5 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
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

        {/* Skills */}
        <section className="mb-16">
          <h2
            className={`text-xl sm:text-2xl mb-6 text-slate-900 dark:text-white border-b-2 border-pink-300 dark:border-pink-400/80 pb-2`}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 lg:gap-4 justify-between">
            <div className="bg-slate-700/60 md:w-49/100 w-full border border-slate-600/60 rounded-2xl p-4">
              <h2 className="text-base sm:text-lg text-white font-semibold mb-3">
                Languages & Frameworks
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Python",
                  "Next.js",
                  "ASP.NET",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-100 text-slate-900 rounded-lg text-[11px] sm:text-xs font-semibold border border-slate-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/60 md:w-49/100 w-full border border-slate-600/60 rounded-2xl p-4">
              <h2 className="text-base sm:text-lg text-white font-semibold mb-3">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Git", "Rest APIs", "Docker", "Linux", "VS Code"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-100 text-slate-900 rounded-lg text-[11px] sm:text-xs font-semibold border border-slate-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="bg-slate-700/60 md:w-49/100 w-full border border-slate-600/60 rounded-2xl p-4">
              <h2 className="text-base sm:text-lg text-white font-semibold mb-3">
                Frontend
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML/CSS",
                  "Tailwind CSS",
                  "Responsive Design",
                  "Accessibility",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-100 text-slate-900 rounded-lg text-[11px] sm:text-xs font-semibold border border-slate-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/60 md:w-49/100 w-full border border-slate-600/60 rounded-2xl p-4">
              <h2 className="text-base sm:text-lg text-white font-semibold mb-3">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Team Collaboration",
                  "Problem Solving",
                  "Time Management",
                  "Adaptability",
                  "Communication",
                  "Scrum",
                  "Code Reviews",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-100 text-slate-900 rounded-lg text-[11px] sm:text-xs font-semibold border border-slate-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2
            className={`text-xl sm:text-2xl mb-6 text-slate-900 dark:text-white border-b-2 border-blue-300 dark:border-blue-400/80 pb-2`}
          >
            Education
          </h2>
          <div
            className={`p-5 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
              <div>
                <h3
                  className={`text-lg text-slate-900 dark:text-white font-semibold`}
                >
                  Computer Engineering
                </h3>
                <p className="text-slate-300">Oslo Metropolitan University.</p>
              </div>
              <span className="text-slate-400">2022 - Present</span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-slate-300`}>
              <li>
                Currently pursuing a Bachelor&apos;s degree in Computer
                Engineering, with an expected graduation date in the summer of
                2026.
              </li>
              <li>
                The program has provided me with a strong foundation in software
                development, algorithms, and data structures, complementing my
                practical experience.
              </li>
              <li>
                Have during my studies learned a lot about programming
                languages, software architecture, and best practices in software
                development, which I have applied in my projects.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2
            className={`text-xl sm:text-2xl mb-6 text-slate-900 dark:text-white border-b-2 border-green-300 dark:border-green-400/80 pb-2`}
          >
            Projects
          </h2>
          <div
            className={`p-5 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
              <div>
                <h3
                  className={`text-lg text-slate-900 dark:text-white font-semibold`}
                >
                  This Website
                </h3>
                <p className="text-slate-300">Personal Portfolio Website.</p>
              </div>
              <span className="text-slate-400">2026 - Present</span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-slate-300`}>
              <li>
                A personal portfolio website built with Next.js and Tailwind
                CSS, showcasing my projects, skills, and experience in a clean
                and modern design.
              </li>
              <li>
                The website is fully responsive and optimized for performance,
                providing an engaging user experience across all devices.
              </li>
              <li>
                This website serves as a place for me to display who i am, my
                experience, and my skills, and is a project that i am
                continuously improving and updating as i grow in my career.
              </li>
            </ul>
          </div>
          <div
            className={`p-5 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-500 bg-slate-800/50 border-slate-700/50 rounded-3xl my-6`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
              <div>
                <h3
                  className={`text-lg text-slate-900 dark:text-white font-semibold`}
                >
                  Innsikt Parent App
                </h3>
                <p className="text-slate-300">
                  App for parents to develop better communication with their
                  children.
                </p>
              </div>
              <span className="text-slate-400">2025 - Present</span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-slate-300`}>
              <li>
                This is a collaborative project where I am working with fellow
                student and Innsikt.ai to create an app that helps parents and
                children communicate better, by providing a platform for sharing
                thoughts, feelings, and experiences in a safe and supportive
                environment.
              </li>
              <li>
                The app is built using React Native for the frontend and Python
                FastApi for the backend, with postgreSQL as the database, hosted
                in AWS, and is designed to be user-friendly and accessible to
                parents of all tech levels.
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-16 pt-6">
          <div className="border border-slate-300/60 dark:border-slate-700/60 rounded-2xl bg-white/80 dark:bg-slate-900/70 shadow-lg p-6 sm:p-8">
            <div className="flex flex-col items-start gap-4">
              <div className="border-l-4 border-emerald-400 pl-3">
                <h2 className="text-lg text-slate-900 dark:text-white font-semibold">
                  Contact
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Get in touch
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Mail:
                  </span>{" "}
                  <a
                    href="mailto:steineskil@gmail.com"
                    className="underline decoration-emerald-400/80 hover:text-emerald-600 dark:hover:text-emerald-300"
                  >
                    steineskil@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    LinkedIn:
                  </span>{" "}
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/stein-eskil-losvar-491207199/"
                    className="underline decoration-emerald-400/80 hover:text-emerald-600 dark:hover:text-emerald-300"
                  >
                    Stein-Eskil H. Losvar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
