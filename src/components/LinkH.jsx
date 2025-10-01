function LinkHeader({ text, link }) {
  return (
    <a
      className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white dark:focus:text-shadow-lg/40 dark:focus:text-shadow-cyan-400 active:animate-pulse"
      href={link}
      aria-current="page"
    >
      {text}
    </a>
  );
}

export default LinkHeader;
