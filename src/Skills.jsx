import './Skills.css'

const languages = [
  "C++",
  "Go",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Ruby"
]

const databases = [
  "MySQL",
  "PostgreSQL",
]

const web = [
  "Django",
  "Ruby on Rails",
]

const others = [
  "React",
  "Bootstrap",
  "Material UI",
  "Chakra UI",
  "JavaFX"
]

const tools = [
  "GitHub",
  "Git",
  "Datadog",
  "Splunk",
  "Sentry",
  "Visual Studio Code"
]

function SkillList({data}) {

  return (
    <div className="float-start w-100">
      {
        data.map((v) => (      
          <SkillPill value={v}/>
        )
      )}
    </div>
  )
}

function SkillPill({value}) {
  return(
    <button className="btn ms-3 mb-2" disabled>{value}</button>
  )
}

export default function Skills() {
  return(
    <div className="container">
      <div className="row align-items-top gx-0 mb-0">
        <div className="col-4">
          <h5 className="fw-bold">
            Programming Languages:
          </h5>
        </div>
        <div className="col">
          <SkillList data={languages} />
        </div>
      </div>

      <hr />

      <div className="row align-items-top gx-0">
        <div className="col-4">
          <h5 className="fw-bold">
            Databases:
          </h5>
        </div>
        <div className="col">
          <SkillList data={databases} />
        </div>
      </div>

      <hr />

      <div className="row align-items-top gx-0">
        <div className="col-4">
          <h5 className="fw-bold">
            Web Frameworks:
          </h5>
        </div>
        <div className="col">
          <SkillList data={web} />
        </div>
      </div>
      
      <hr />

      <div className="row align-items-top gx-0">
        <div className="col-4">
          <h5 className="mb-0 fw-bold">
            Others:
          </h5>
          <span className="text-secondary mt-0 fw-lighter">
            (Front-End Frameworks, Libraries, etc.)
          </span>
        </div>
        <div className="col">
          <SkillList data={others} />
        </div>
      </div>

      <hr />

      <div className="row align-items-top gx-0 pb-2 mb-5">
        <div className="col-4">
          <h5 className="fw-bold">
            Tools:
          </h5>
        </div>
        <div className="col">
          <SkillList data={tools} />
        </div>
      </div>
    </div>
  )
}