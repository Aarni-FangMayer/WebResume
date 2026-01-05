export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
        Contact
      </h2>
      <div className="space-y-4">
        <div>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Email:{' '}
          </span>
          <a
            href="mailto:aarni.fangmayer@gmail.com"
            className="text-teal-600 hover:underline dark:text-teal-400"
          >
            aarni.fangmayer@gmail.com
          </a>
        </div>
        <div>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            GitHub:{' '}
          </span>
          <a
            href="https://github.com/Aarni-FangMayer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline dark:text-teal-400"
          >
            github.com/Aarni-FangMayer
          </a>
        </div>
      </div>
    </section>
  );
}

