
export default function Home() {
  return (
    <main>
      <div className="banner" style={{ backgroundColor: "var(--inbox-light)", padding: '2rem' }}>
        <div className="container">
          <h1>Documentation</h1>

          <h3 className="mt-3">Welcome to Inbox AI: Early Alpha Open-Source Project</h3>
          <p>

            We're excited to introduce you to Inbox AI, an open-source project that aims to bring cutting-edge artificial intelligence
            capabilities to your email inbox. As we're still in the early stages of development (alpha), this is a chance for you to join us on
            our journey and contribute to shaping the future of email management.

            **What can you expect from our documentation?**

            Our documentation page provides an overview of the project, including installation guides, setup tutorials, and feature explanations.
            We'll also be sharing updates on our development progress, known issues, and plans for future releases.

            **Before diving in...**

            Please note that this is an early alpha release, which means you may encounter bugs or unfinished features. If you're not comfortable
            with experimenting with beta software, we recommend waiting until we reach a more stable milestone.

            That being said, if you're up for the challenge and want to be part of shaping the future of Inbox AI, feel free to explore our
            documentation further. Click the link below to access our README file, which contains all the details you need to get started.

            <a href="https://github.com/fabiopacificicom/inboxAI/blob/main/README.md" className="d-flex gap-2" target="_blank">
              <i className="bi bi-github"></i>
              This is the documentation page
              <i className="bi bi-arrow-right-square" ></i>
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}