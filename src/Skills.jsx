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
        data.map((v, i) => (      
          <SkillPill value={v} key={i}/>
        )
      )}
    </div>
  )
}

function SkillPill({value}) {
  return(
    <button className="btn ms-3 btn-outline-secondary mb-2">{value}</button>
  )
}

export default function Skills() {
  return(
    <div className="container px-4 pt-2">
      <div className="row align-items-top gx-0 mb-0">
        <div className="col-4">
          <h6 className="fw-bold">
            Programming Languages:
          </h6>
        </div>
        <div className="col">
          <SkillList data={languages} />
        </div>
      </div>

      <hr />

      <div className="row align-items-top gx-0">
        <div className="col-4">
          <h6 className="fw-bold">
            Databases:
          </h6>
        </div>
        <div className="col">
          <SkillList data={databases} />
        </div>
      </div>

      <hr />

      <div className="row align-items-top gx-0">
        <div className="col-4">
          <h6 className="fw-bold">
            Web Frameworks:
          </h6>
        </div>
        <div className="col">
          <SkillList data={web} />
        </div>
      </div>
      
      <hr />

      <div className="row align-items-top gx-0">
        <div className="col-4">
          <h6 className="mb-0 fw-bold">
            Others:
          </h6>
          <span className="text-gray mt-0">
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
          <h6 className="fw-bold">
            Tools:
          </h6>
        </div>
        <div className="col">
          <SkillList data={tools} />
        </div>
      </div>
    </div>
  )
}