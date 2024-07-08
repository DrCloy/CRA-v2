"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav
      className="text-white fixed w-1/4 mx-auto my-0 top-5 rounded-3xl px-0 py-4 left-1/2 z-10
                -translate-x-1/2"
    >
      <ul className="flex justify-center gap-12">
        <li className="list-none align-middle transform-none transition-all duration-100 ease-in-out font-semibold hover:scale-105">
          <Link href="/">
            <svg className={`${path === "/" ? "h-7 w-7" : "h-5 w-5"} text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              />
            </svg>
          </Link>
        </li>
        <li className="list-none align-middle transform-none transition-all duration-100 ease-in-out font-semibold hover:scale-105">
          <Link href="/">About</Link>
        </li>
      </ul>
    </nav>
  );
}
