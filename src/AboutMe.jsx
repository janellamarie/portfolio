import image from "../src/assets/img/20230218_170648 icon.jpg"

// Content: About Me
export default function AboutMe() {
  return(
    <div className="container text-center p-1">
      <div className="row align-items-center mb-3">
        <div className="col">
          <img src={image} className="center-block rounded" width={150}/>
        </div>
      </div>
        <div className="row">
          <div className="col">
            <h2><b>I&apos;m Janella Marie Co.</b></h2>
            <p>A full-stack software engineer currently based in Lutz, FL, USA. I graduated from University of South Florida with Bachelor&apos;s degree in Computer Science. I love building web experiences and I&apos;m always eager to learn new things. </p>
          </div>
        </div>
      </div>
  )
}