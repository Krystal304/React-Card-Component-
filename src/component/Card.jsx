import profile from '../assets/profile.png'
function Card() {
  return (
    <div className="card">
        <img className="cardImage" src={profile} alt="profile picture"></img>
        <h2 classname="cardTitle">Queen Kay</h2>
        <p classname="cardText">Web Developer</p>
        </div>
  )
}

export default Card