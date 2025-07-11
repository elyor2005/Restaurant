import { SOCIAL_MEDIA_LINKS } from "../constants/index.jsx";
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            href={link.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;compileTab. All right reserved
      </p>
    </div>
  );
};

export default Footer;
