import './App.css'

function App() {
  return (
    <div className="page">
      {/* Hero */}
      <header className="hero">
        <p className="hero__presented-by">
          One From The Heart &amp; Chelmsford City Theatres present
        </p>
        <h1 className="hero__title">The Miracle Worker</h1>
        <p className="hero__subtitle">by William Gibson</p>
        <div className="hero__meta">
          <p>
            <strong>Cramphorn Studio</strong>, Chelmsford
          </p>
          <p>October 2021</p>
          <p>Directed by Charlotte Peters</p>
        </div>
      </header>

      {/* Production Images & Reviews */}
      <section className="section">
        <div className="gallery">
          <div className="gallery__item">
            <img
              src="/images/annie-solo.jpg"
              alt="Jessica Jolleys as Annie Sullivan in The Miracle Worker"
            />
          </div>
          <div className="gallery__item">
            <img
              src="/images/annie-helen.jpg"
              alt="Annie Sullivan spelling into Helen Keller's hand — Jessica Jolleys and Scarlett Ward"
            />
          </div>
        </div>

        <div className="reviews">
          <div className="review">
            <p className="review__quote">
              A truly exceptional production &mdash; I watched, suffered, and
              enjoyed a masterpiece of theatrical performance.
            </p>
            <p className="review__attribution">
              &mdash; Audience member
            </p>
          </div>
          <div className="review">
            <p className="review__quote">
              Thank you for staging this truly exceptional production of
              The Miracle Worker at the Cramphorn Theatre.
            </p>
            <p className="review__attribution">
              &mdash; Audience member
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Audio */}
      <section className="section audio-section">
        <h2 className="section__heading">Listen</h2>
        <p className="audio-description">Original music by Nigel Lewis</p>
        <div className="audio-player">
          <audio controls preload="metadata">
            <source src="/Miracle worker Theme1 - Nigel Lewis - 19_08_2021, 14.37.m4a" type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      <div className="divider" />

      {/* Video */}
      <section className="section video-section">
        <h2 className="section__heading">Programme Slideshow</h2>
        <div className="video-player">
          <video controls preload="metadata">
            <source src="/miracle-worker-slideshow.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      </section>

      <div className="divider" />

      {/* About the Production */}
      <section className="section">
        <h2 className="section__heading">About the Production</h2>
        <div className="about__text">
          <p>
            This production of <em>The Miracle Worker</em> brought the true-life
            story of Helen Keller and her teacher Annie Sullivan to the
            Cramphorn Studio in Chelmsford. Set in 1880s Alabama, the play
            charts Annie Sullivan's arrival at the Keller household and her
            fierce determination to reach Helen&mdash;a young girl left deaf
            and blind after illness, with no means of communicating with the
            world around her.
          </p>
          <p>
            Produced by Daryl Back for One From The Heart and Ian Knowles for
            Chelmsford City Theatres, the production was supported by Arts
            Council England funding. Director Charlotte Peters&mdash;Associate
            Director of <em>War Horse</em> for the National Theatre and Stephen
            Daldry's <em>An Inspector Calls</em>&mdash;led a company that stayed
            true to the emotional and physical intensity of Gibson's text.
          </p>
          <p>
            Co-producer Daryl Back previously played Helen Keller in the 1988
            West End production of <em>The Miracle Worker</em>, a role that
            inspired the founding of One From The Heart and this return to
            Helen's extraordinary story.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Programme */}
      <section className="section">
        <h2 className="section__heading">Programme</h2>
        <div className="programme">
          <div className="programme__group">
            <h3 className="programme__group-title">Cast</h3>
            <div className="programme__entry">
              <span className="programme__name">Jessica Jolleys</span>
              <span className="programme__role">Annie Sullivan</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Scarlett Ward</span>
              <span className="programme__role">Helen Keller</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Abigail Matthews</span>
              <span className="programme__role">Kate Keller</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">David McKechnie</span>
              <span className="programme__role">Captain Keller</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Zack Guest</span>
              <span className="programme__role">James Keller</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">&Eacute;rin Geraghty</span>
              <span className="programme__role">Aunt Ev</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Sophie Delin</span>
              <span className="programme__role">Martha / ASM</span>
            </div>
          </div>

          <div className="programme__group">
            <h3 className="programme__group-title">Creative Team</h3>
            <div className="programme__entry">
              <span className="programme__name">Charlotte Peters</span>
              <span className="programme__role">Director</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Alicia Fowles</span>
              <span className="programme__role">Set Designer</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Chris May</span>
              <span className="programme__role">Lighting Designer</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Mark Wilson</span>
              <span className="programme__role">Sound Designer</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Nigel Lewis</span>
              <span className="programme__role">Original Music</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Luke Harrison</span>
              <span className="programme__role">Wardrobe Designer</span>
            </div>
          </div>

          <div className="programme__group">
            <h3 className="programme__group-title">Production</h3>
            <div className="programme__entry">
              <span className="programme__name">Daryl Back</span>
              <span className="programme__role">Producer (One From The Heart)</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Ian Knowles</span>
              <span className="programme__role">Producer (Chelmsford City Theatres)</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Jemma Kaye</span>
              <span className="programme__role">Company Stage Manager</span>
            </div>
            <div className="programme__entry">
              <span className="programme__name">Emily Peplow</span>
              <span className="programme__role">Production Assistant</span>
            </div>
          </div>
        </div>

        <h3 className="section__heading section__heading--sub">Full Programme</h3>
        <div className="programme-pages">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <img
              key={num}
              src={`/programme/page-${num}.jpg`}
              alt={`Programme page ${num}`}
              className="programme-pages__img"
            />
          ))}
        </div>
      </section>

      {/* Presented by arrangement */}
      <footer className="footer">
        <p>
          <em>The Miracle Worker</em> is presented by arrangement with Concord
          Theatricals Ltd on behalf of Samuel French Ltd.
        </p>
        <p>Supported by Arts Council England.</p>
        <p className="footer__license">
          &copy; One From The Heart &amp; Chelmsford City Theatres 2021
        </p>
      </footer>
    </div>
  )
}

export default App
