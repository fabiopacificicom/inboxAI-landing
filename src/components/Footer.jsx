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
            <h3 className='mb-3'>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/">Home </Link></li>
              <li><Link to="/docs">Documentation </Link></li>

              <li><a target='_blank' href="https://github.com/fabiopacificicom/inboxAI">Source Code <i className="bi bi-link"></i> </a></li>
              <li><a target='_blank' href="https://github.com/fabiopacificicom/inboxAI/issues">Report a bug <i className="bi bi-link"></i></a></li>

            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}