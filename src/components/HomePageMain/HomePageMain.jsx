import style from './HomePageMain.module.css'
export default function Main() {

  return (
    <main className={style.main}>

      <div className={style.container}>
        <h1 className={style.page_title}>
          Manage your inbox privately with AI
        </h1>
        <p className={style.lead}>
          Your <strong>trusted companion</strong> for <strong>inbox zen</strong> - AI-powered email management, 100% free and open-source!
        </p>

        <div className={style.platforms}>
          <section>
            <h4>Download for Desktop</h4>
            <div className={style.desktop}>
              <div className={style.icon}>
                <div className={style.icon__image}>
                  <i className="bi bi-microsoft"></i>
                </div>
                <div className={style.icon__text}>
                  Windows
                </div>
              </div>
              <div className={style.icon}>
                <div className={style.icon__image}>
                  <i className="bi bi-apple"></i>
                </div>
                <div className={style.icon__text}>
                  Mac
                </div>
              </div>
              <div className={style.icon}>
                <div className={style.icon__image}>
                  <i className="bi bi-ubuntu"></i>
                </div>
                <div className={style.icon__text}>
                  Linux
                </div>
              </div>
            </div>
          </section>
          <section>
            <h4>Download for Mobile</h4>
            <div className={style.mobile}>

              <div className={style.icon}>
                <div className={style.icon__image}>
                  <i className="bi bi-android"></i>
                </div>
                <div className={style.icon__text}>
                  Android
                </div>
              </div>
              <div className={style.icon}>
                <div className={style.icon__image}>
                  <i className="bi bi-apple"></i>
                </div>
                <div className={style.icon__text}>
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