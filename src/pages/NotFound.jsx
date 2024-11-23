import { Link } from "react-router-dom"

export default function Home() {
  return (

    <main className="d-flex align-items-center justify-content-center">
      <div>
        <h1 className="mb-4">Ops! 😱 Page not found</h1>
        <Link to="/">
          <span>Go Home </span>
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </main>

  )
}