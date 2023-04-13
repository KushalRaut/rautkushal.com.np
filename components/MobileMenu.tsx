import classNames from "classnames";
import Link from "next/link";

export default function MobileMenu({ isOpen, closeMobileMenu }) {
  return (
    <>
      <div
        className={classNames(
          `w-full h-[calc(100vh-5px)] absolute top-0 left-0 z-50 transition-all duration-300 ease-in-out overflow-hidden`,
          isOpen ? "translate-y-0" : "translate-y-[-1000px]"
        )}
      >
        <ul
          className="w-full h-full flex flex-col gap-4 justify-center items-center  absolute bg-gray-100 dark:bg-gray-900"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          <li
            className="w-full flex justify-center items-center  text-gray-900 dark:text-gray-100 text-base font-semibold"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4  hover:text-blue-400 ">Home</a>
            </Link>
          </li>

          <li
            className="w-full flex justify-center items-center  text-gray-900 dark:text-gray-100 text-base font-semibold"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4  hover:text-blue-400">Blog</a>
            </Link>
          </li>

          <li
            className="w-full flex justify-center items-center  text-gray-900 dark:text-gray-100 text-base font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/guestbook">
              <a className="flex w-auto pb-4  hover:text-blue-400">Guestbook</a>
            </Link>
          </li>
          <li
            className="w-full flex justify-center items-center  text-gray-900 dark:text-gray-100 text-base font-semibold"
            style={{ transitionDelay: "225ms" }}
          >
            <Link href="/projects">
              <a className="flex w-auto pb-4  hover:text-blue-400">Projects</a>
            </Link>
          </li>
          <li
            className="w-full flex justify-center items-center  text-gray-900 dark:text-gray-100 text-base font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/about">
              <a className="flex w-auto pb-4  hover:text-blue-400">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
