export default function ProjectListItem({ href, title, index, children }: any) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-baseline">
          <div className="flex items-center">
            <div className="text-gray-500 dark:text-gray-400 text-left mr-6">
              {index}
            </div>
            <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0 w-full sm:w-auto text-white">
            {children}
          </div>
        </div>
      </div>
    </a>
  );
}
