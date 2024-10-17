import './Experience.css'

function Header({title, subtitle, date}) {
  return (
    <div className="header">
      <h4 className="card-title fw-bold">{title}</h4>
      <p>
        <span className="float-end text-body-secondary">{date}</span>
        <h5 className="card-subtitle pb-3">{subtitle}</h5>
      </p>
    </div>
  )
}


export default function Experience() {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="timeline">
            {/* GithHub */}
            <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <Header 
                    title={"Software Engineer I"} 
                    subtitle={"GitHub"} 
                    date={"July 2022 - March 2024"} 
                  />
                  <p className="card-text text-break">
                    <ul>
                      <li>
                        Worked as a full-stack software engineer in an agile, scrum environment under the secret scanning experiences team
                      </li>
                      <li>
                        Participated in scrum ceremonies such as daily standup meetings and bi-weekly sprint retros
                      </li>
                      <li>
                        Utilized Golang and Ruby to modify and update existing features for the secret scanning web experience
                      </li>
                      <li>
                        Assisted with transitioning the front-end web experience from using Ruby on Rails components to React components with TypeScript
                      </li>
                      <li>
                        Shortened the URLs returned by a feature that blocks pushes from the CLI onto GitHub when a secret isdetected in the push
                      </li>
                      <li>
                        Expanded coverage for an app that calls third-party public APIs to check validity of partner tokens and secrets leaked in content uploaded to GitHub repositories
                      </li>
                      <li>
                        Coordinated with product managers and designers to implement copy changes based on customer and internal feedback
                      </li>
                      <li>
                        Refactored the mailers sent by the secret scanning app, resulting in clearer emails and better code maintainability
                      </li>
                      <li>
                        Wrote and updated existing unit tests while working on code for feature work
                      </li>
                      <li>
                        Served as on-call to triage support escalations and any live-site issues, using Datadog, Sentry, and Splunk during shifts to monitor app performance, to investigate issues, and to debug errors and exceptions
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>

            {/* Bashpole */}
            <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <Header 
                    title={"Intern for Intermediate Java and More for a Web App for Non-profits"} 
                    subtitle={"Bashpole Software, Inc."} 
                    date={"December 2021 - June 2022"} 
                  />
                  <p className="card-text">
                  <ul>
                    <li>
                      Worked in a team of full-stack Java software developer interns, supervised by a senior engineer
                    </li>
                    <li>
                      Created landing pages to be used in advertisements by non-profits using Java Server Pages (JSP), HTML, and CSS
                    </li>
                    <li>
                      Wrote SQL queries and used MySQL to store and manage data to be displayed
                    </li>
                    <li>
                      Created scripts in Google Workspace Apps using JavaScript to help business process such as creating a spreadsheet to track internship progress
                    </li>
                  </ul>
                  </p>
                </div>
              </div>
            </li>


          {/* USF */}
          <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <Header 
                    title={"University of South Florida"} 
                    subtitle={"Bachelor of Science, major in Computer Science"}
                    date={"May 2020 - May 2022"}
                  />
                </div>
                <h5 className="ms-3">Projects</h5>
                <p className="card-text">
                <ul>
                  <li>
                    <p className="float-end me-3"> 
                        <a href="https://github.com/janellamarie/cop3331-flex-project" target="_blank"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mx-2" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                          </svg>
                        </a>
                      </p>
                      <h6>COP-3331 (Object-Oriented Software Design) Flex Project</h6>
                      <p>
                        <ul>
                          <li>Programming Language(s): C++</li>
                          <li>CLI-based program simulating a CRUD app using data from the game &quot;Genshin Impact&quot;</li>
                        </ul>
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
            </li>

          {/* HCC */}
          <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <Header 
                    title={"Hillsborough Community College"} 
                    subtitle={"Associate in Arts, major in Computer Information Systems"} 
                    date={"August 2018 - December 2019"} 
                  />
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}