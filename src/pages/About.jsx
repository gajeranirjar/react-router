export const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <div className="grid grid-two--cols">
          
          <div className="about-content">
            <h1>About This App</h1>

            <p>
              This application is built using <strong>React</strong> and{" "}
              <strong>React Router DOM</strong>. It demonstrates client-side
              routing by navigating between multiple pages without reloading
              the browser.
            </p>

            <p>
              This project is part of my learning journey with React, focusing on
              components, routing, and modern front-end development practices.
            </p>

            <ul>
              <li>Home - Welcome and main content</li>
              <li>Movies - Browse and explore movies</li>
              <li>Contact - Get in touch with us</li>
              <li>About - Learn more about this application</li>
            </ul>

            <p>
              More features and improvements will be added soon 🚀
            </p>
          </div>

          <div className="about-image">
            <figure>
              <img
                src="/contact.png"
                alt="About page illustration"
              />
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
};


