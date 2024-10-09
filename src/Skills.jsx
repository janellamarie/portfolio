let languages = [
  "C++",
  "Java",
  "Python"
]

function SkillPill(value) {
  console.log("<SkillPill> value: ", value)
  return(
    <button className="btn btn-outline-primary" disabled>{value}</button>
  )
}

export default function Skills() {
  return(
    <div className="container">
      <div className="row">
        {languages.map((l) => {
          <SkillPill value={l}/>
        })}
      </div>
    </div>
  )
}