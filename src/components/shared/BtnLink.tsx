interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const BtnLink = ({ href, text, className = "", onClick }: BtnLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border bg-blue-600 dark:bg-blue-600 cursor-pointer ${className}`}
    >
      <span className="relative z-10 text-white"> {text}</span>
    </a>
  );
};