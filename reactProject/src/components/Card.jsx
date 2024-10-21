import profilePic from '../assets/lightning.png'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>NorPeK</h2>
            <p className='card-text'>I code programs and cry</p>

        </div>
    )
}

export default Card