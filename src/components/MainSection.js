import pinimg from '../assets/pin.png'
const MainSection = () => {
  return (
    <section className="main-section">
      <div className="leftside">
        <h2 className="main-text">
          One docs app for all your <br />
          notes, docs and all your <br />
          important links
        </h2>
        <h2 className="mobile-main-text hidden">
          One docs app for all your notes, docs and all your important links
        </h2>
        <p>
          One solution for storing all of your docs, notes and links for free.
        </p>

        <div className="main-section__cta">
          <button className="btn-try">Try For Free</button>
          <button className="btn-learnmore">Learn More</button>
        </div>
      </div>
      <div className="rightside">
        <img src={pinimg} width="350px" alt="" />
      </div>
    </section>
  );
};

export default MainSection;
