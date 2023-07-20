function Game (props) {
    return <div className="game" style={{border: `2px solid ${props.game.color}`}}>
        <h2>{props.game.name}</h2>
        <img src={props.game.img} alt={props.game.img} />
    </div>
}

export default Game;