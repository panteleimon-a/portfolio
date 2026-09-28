'use client'

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Panteleimon Angelides home">Panteleimon Angelides</a>
        <div className="header-actions">
          <div className="resource-links" aria-label="Selected work">
            <details className="cv-menu">
              <summary>CV</summary>
              <div className="cv-panel">
                <button className="cv-close" type="button" aria-label="Close CV" onClick={(event) => { const details = event.currentTarget.closest('details'); if (details) details.open = false }}>×</button>
                <div className="cv-container">
                  <div className="cv-header">
                    <h1>Panteleimon Angelidis Chatziantoniou</h1>
                    <p>Student Researcher, Electrical &amp; Computer Engineering</p>
                    <div className="cv-contact-info">
                      <span>Athens, Greece</span>
                      <span>panteleimon.angelidis [at] gmail [dot] com</span>
                    </div>
                  </div>
                  <div className="cv-section">
                    <h2>Education</h2>
                    <div className="cv-entry">
                      <span className="cv-date">09/2022 – 06/2027 [E]</span>
                      <div className="cv-title">M.Eng. in Electrical and Computer Engineering</div>
                      <div className="cv-institution">National Technical University of Athens, Athens, Greece</div>
                    </div>
                    <div className="cv-entry">
                      <span className="cv-date">09/2018 – 06/2022</span>
                      <div className="cv-title">B.Sc. in Finance, majoring Financial Engineering</div>
                      <div className="cv-institution">University of Macedonia, Thessaloniki, Greece</div>
                    </div>
                  </div>
                  <div className="cv-section">
                    <h2>Research Interests</h2>
                    <ul>
                      <li>Pattern Recognition &amp; Computer Vision</li>
                      <li>AI Forensics &amp; Deep Fake Recognition</li>
                      <li>Unsupervised Learning for Vector Embeddings</li>
                    </ul>
                  </div>
                  <div className="cv-section">
                    <h2>Research Experience</h2>
                    <div className="cv-entry">
                      <span className="cv-date">Current</span>
                      <div className="cv-title">Doctoral Research: Prognostic Value of Machine Learning in Oncology</div>
                      <div className="cv-institution">Biomedical Engineering Lab, National Technical University of Athens, Greece</div>
                      <div className="cv-description">Investigating the dynamic prognostic significance of serial urine cytology and clinicopathological characteristics in Non-Muscle Invasive Bladder Cancer (NMIBC) recurrence prediction.
                        <ul>
                          <li>The study involves clinical research by National and Kapodistrian University of Athens.</li>
                          <li>Supervising Instructor: Dr. Georgios Matsopoulos.</li>
                          <li>Research Conductor: Georgios Papavasileiou M.D.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="cv-entry">
                      <span className="cv-date">01/2023 – 06/2024</span>
                      <div className="cv-title">AI-Enhanced Fact-Checking Software: A Decision Support System for Journalists</div>
                      <div className="cv-institution">AI &amp; Learning Systems Lab, NTUA &amp; Walk Accelerator, Aristotle University of Thessaloniki, Greece</div>
                      <div className="cv-description">Co-founder and in charge of R&amp;D for 'factual'. Vision: Development of NLP software solutions for a fact-driven world, targeting disinformation at source.
                      </div>
                    </div>
                    <div className="cv-entry">
                      <span className="cv-date">03/2021 – 06/2022</span>
                      <div className="cv-title">Bitcoin Price Range Prediction using Google's Temporal Fusion Transformers</div>
                      <div className="cv-institution">AIIA Lab, Aristotle University of Thessaloniki, Greece</div>
                      <div className="cv-description">Collaborated with supervisor Mygdalis Vasileios (Post-doc, Aristotle University) to adapt lab's findings in Computer Vision to Financial Engineering use cases.
                      </div>
                    </div>
                  </div>
                  <div className="cv-section">
                    <h2>Publications</h2>
                    <div className="cv-entry">
                      <ul>
                        <li>Papavasileiou G, 
                          <b>Angelidis P</b>, Gklinos K, Kontolatis N, Kakkos I, Matsopoulos G, Fragkoulis C, Politi A, Dellis A, Ntoumas K. P0139 A classic test, a new concept: Development of a prognostic model based on dynamic urine cytology and Decision Support System (DSS) in NMIBC patients treated with BCG-Study Design. 
                          <i>European Urology</i>. 2026;89(Suppl 1):S1. ISSN 0302-2838. doi:10.1016/S0302-2838(26)01048-1.
                        </li>
                        <li>Papavasileiou G, 
                          <b>Angelidis P</b>, Gklinos K, Kontolatis N, Passos I, Fragkoulis C. Exploring fesoterodine in multiple sclerosis with urinary dysfunction: a prospective real-world analysis. 
                          <i>Hellenic Urology</i>. 2026 March;38(1):7-13. doi:10.23736/S2241-9136.25.00096-9.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cv-section">
                    <h2>Professional Experience</h2>
                    <div className="cv-entry">
                      <span className="cv-date">03/2025 – Present</span>
                      <div className="cv-title">Senior Consultant</div>
                      <div className="cv-institution">Deloitte, Norway (Remote)</div>
                      <ul>
                        <li>Developing contributor on RegMiner, a Deloitte product for utilizing LLMs to analyze legal content.</li>
                        <li>Engineer of internal use apps, automating operations and processes.</li>
                        <li>Experience with risk modeling ML pipelines and simulations (Systemic Nordic &amp; EU Banks).</li>
                      </ul>
                    </div>
                    <div className="cv-entry">
                      <span className="cv-date">02/2022 – 05/2022</span>
                      <div className="cv-title">Internship</div>
                      <div className="cv-institution">NBG Securities</div>
                      <ul>
                        <li>Assistant to the Director of North Greece, led branch automations and crafted solutions for IPO clients.</li>
                      </ul>
                    </div>
                    <div className="cv-entry">
                      <span className="cv-date">02/2020 – 05/2021</span>
                      <div className="cv-title">Quantitative Research</div>
                      <div className="cv-institution">Valuation Research Specialists, Athens / Luxemburg</div>
                    </div>
                  </div>
                  <div className="cv-section">
                    <h2>Lectures</h2>
                    <div className="cv-entry">
                      <span className="cv-date">06/2022</span>
                      <div className="cv-title">"Can Machine Learning Mathematics Be Understood by High School Seniors?"</div>
                      <div className="cv-institution">Aristotle University of Thessaloniki, CVML Lab, Greece</div>
                      <div className="cv-description">Presented the fundamental mathematical principles behind Artificial Intelligence and Machine Learning to high school students, using simplified examples and real-world applications.
                      </div>
                    </div>
                  </div>
                  <div className="cv-section">
                    <h2>Honors &amp; Awards</h2>
                    <ul>
                      <li>factual: DisinfoHacks Winning Startup [TIF Helexpo 2022]</li>
                      <li>Panhellenic standardized system exams merit [Greek Government]</li>
                      <li>Academic scholarship, top 3 grades in North Greece [Eurobank]</li>
                    </ul>
                  </div>
                  <div className="cv-section">
                    <h2>Certifications &amp; Coursework</h2>
                    <ul>
                      <li>Google Cloud Platform - Google Cloud Leader Certification</li>
                      <li>IBM AI Engineering Professional Certificate</li>
                      <li>Short Courses on Computer Vision, AIDA</li>
                    </ul>
                  </div>
                  <div className="cv-section">
                    <h2>Memberships &amp; Volunteering</h2>
                    <ul>
                      <li>IEEE, National Technical University of Athens, Computer Science Association</li>
                      <li>IEEE, Aristotle University of Thessaloniki Student Branch, Researcher - Web Developer</li>
                      <li>Google Developers Community, Greece</li>
                      <li>Univation, NGO and startup designed for students' employability, Project Manager</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
            <a href="https://sciencedirect.com/science/article/pii/S0302283826010481" target="_blank" rel="noreferrer">Dissertation</a>
            <a href="https://factual.gr" target="_blank" rel="noreferrer">My first research idea</a>
          </div>
          <nav className="site-nav" aria-label="Social links">
            <a href="https://www.linkedin.com/in/panteleimonangelidis/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img className="social-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/panteleimon-a" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img className="social-logo" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" alt="GitHub" />
            </a>
            <a href="https://orcid.org/0009-0009-4779-3216" target="_blank" rel="noreferrer" aria-label="ORCID">
              <img className="social-logo" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/orcid.svg" alt="ORCID" />
            </a>
          </nav>
        </div>
      </header>
      <div id="top" className="page-content">
        <section className="intro" aria-labelledby="intro-heading">
          <div className="intro-layout">
            <div className="intro-copy-wrap">
              <p id="intro-heading" className="intro-copy">Penultimate M.Eng. Student Researcher in Electrical &amp; Computer Engineering at NTUA specializing in machine learning, computer vision, and autonomous physical systems. Currently conducting clinical pattern recognition research for bladder cancer diagnostics at NTUA's BioMed Lab. Deloitte Norway engineer delivering quantitative credit risk models for Tier-1 banks.
              </p>
            </div>
            <div className="intro-photo-slot" aria-hidden="true" />
          </div>
        </section>
      </div>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Panteleimon Angelides</span>
        <a href="mailto:panteleimon.angelidis@gmail.com">Get in touch 
          <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  )
}
