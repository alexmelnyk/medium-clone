import sanitizeHtml from "sanitize-html";

const defaultOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "p", "div", "br"],
  allowedAttributes: {
    a: ["href"],
  },
};

const sanitize = (dirty, options = {}) => ({
  __html: sanitizeHtml(dirty, { ...defaultOptions, ...options }),
});

export default function SanitizeHTML({ html, options, className }) {
  return <div className={className} dangerouslySetInnerHTML={sanitize(html, options)} />;
}
