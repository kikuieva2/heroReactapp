import './HeroDescription.css';

function HeroDescription({hero}){
    return(
        <div className="hero-body">
        <h3 className="hero-title">{hero.name}</h3>
        <p className="hero-universe">{hero.universe}</p>
        <p className="hero-occupation">{hero.occupation}</p>
        <p className="hero-friends">{hero.friends}</p>
        <p className="hero-superpowers">{hero.superpowers}</p>
        <img src={hero.url} alt={hero.info} />
        </div>
    )
}

export default HeroDescription;