export default function Main() {

  return (
    <main>

      <div className="container">
        <h1 className='page_title'>
          Manage your inbox privately with AI
        </h1>
        <p className='lead'>
          Your private assitant to handly all your incoming email to support your journey - free and open-source
        </p>

        <div className="platforms">
          <section>
            <h4>Download for Desktop</h4>
            <div className="desktop">
              <div className="icon">
                <div className="icon__image">
                  <i class="bi bi-microsoft"></i>
                </div>
                <div className="icon__text">
                  Windows
                </div>
              </div>
              <div className="icon">
                <div className="icon__image">
                  <i class="bi bi-apple"></i>
                </div>
                <div className="icon__text">
                  Mac
                </div>
              </div>
              <div className="icon">
                <div className="icon__image">
                  <i class="bi bi-ubuntu"></i>
                </div>
                <div className="icon__text">
                  Linux
                </div>
              </div>
            </div>
          </section>
          <section>
            <h4>Download for Mobile</h4>
            <div className="mobile">

              <div className="icon">
                <div className="icon__image">
                  <i class="bi bi-android"></i>
                </div>
                <div className="icon__text">
                  Android
                </div>
              </div>
              <div className="icon">
                <div className="icon__image">
                  <i class="bi bi-apple"></i>
                </div>
                <div className="icon__text">
                  ios
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </main>
  )
}