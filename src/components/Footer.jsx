import { Link } from 'react-router-dom'
import inboxAiLogo from '/images/favicon.png'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <div className="logo mb-3" style={{ display: 'flex', alignItems: 'center', gap: "1rem" }}>
              <img src={inboxAiLogo} alt="" />
              <strong>Inbox AI</strong>
            </div>
            <p>Released under Apache License 2.0 license </p>
            <p>Contributed by <a href="https://github.com/fabiopacifici">Fabio Pacific</a></p>
          </div>

          <div className="col offset-md-4">
            <h3 className='my-3'>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><i className="bi bi-link"></i> <Link to="/">Home </Link></li>
              <li><i className="bi bi-link"></i> <Link to="/docs">Documentation </Link></li>

              <li><a target='_blank' href="https://github.com/fabiopacificicom/inboxAI"><i className="bi bi-link"></i> Source Code</a></li>
              <li><a target='_blank' href="https://github.com/fabiopacificicom/inboxAI/issues"><i className="bi bi-link"></i> Report a bug</a></li>

            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}