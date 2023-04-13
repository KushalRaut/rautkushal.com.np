import Link from "next/link";
import { randomHundred } from "data/random";

export default function BlogPost({
  slug,
  title,
  excerpt,
  border,
}: {
  slug: string;
  title: string;
  excerpt: string;
  border: number;
}) {
  const gradientClass = [
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
    "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    "bg-gradient-to-r from-green-200 via-green-300 to-blue-500",
    "bg-gradient-to-r from-red-400 via-gray-300 to-blue-500",
    "bg-gradient-to-r from-green-300 to-purple-400",
    "bg-gradient-to-r from-green-200 via-green-400 to-purple-700",
  ];

  const borderNumber = randomHundred[border];

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={
          "w-full rounded-lg mb-8 " +
          gradientClass[borderNumber] +
          " hover:scale-103 transition-all duration-300"
        }
      >
        <div className="bg-white dark:bg-gray-900 m-1 rounded-lg p-3">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 mb-3 mt-1">
              {title}
            </h4>
            <p className="w-32 flex items-center justify-start text-gray-500 md:justify-end font-style: italic ">
              2022-10-12
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
