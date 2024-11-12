import './HeroDescription.css';

function HeroDescription(props){
    return(
        <div className="hero-body">
        <h3 className="hero-title">{props.name}</h3>
        <p className="hero-universe">{props.universe}</p>
        <p className="hero-occupation">{props.occupation}</p>
        <p className="hero-friends">{props.friends}</p>
        <p className="hero-superpowers">{props.superpowers}</p>
        <img src={props.url} alt={props.info} />
        </div>
    )
}

export default HeroDescription;