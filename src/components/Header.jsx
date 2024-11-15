import inboxAiLogo from '/images/favicon.png'

export default function Header() {
  return (
    <header>
      <div className="notice">
        InBoxAI is in active developmente and currencly released as alpha - might be unstable
      </div>

      <div className="logo">
        <img src={inboxAiLogo} alt="" />
        <strong>Inbox AI</strong>
      </div>
    </header>
  )
}