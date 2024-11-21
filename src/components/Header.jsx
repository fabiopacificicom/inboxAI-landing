import inboxAiLogo from '/images/favicon.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="notice">
        InBoxAI is in active developmente and currencly released as alpha - might be unstable
      </div>

      <nav className='main-nav'>
        <div className="logo">
          <img src={inboxAiLogo} alt="" />
          <strong>Inbox AI</strong>
        </div>
        <ul>
          <li className="d-none d-md-block"><Link to="/">Home</Link></li>
          <li><Link to="/docs">Docs</Link></li>
          <li>
            <a target='_blank' href="https://github.com/fabiopacificicom/inboxAI">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}