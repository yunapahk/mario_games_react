import Game from "./Game";

function Games(props){
    // const gamesJSX = []
    
    // for (let game of props.games){
    //     gamesJSX.push(<li>{game.name}</li>)
    // }
        
        // return <ul>{gamesJSX}</ul>

    // When render an array of JSX, the top level element, should always have a key prop
 
    return <div className="container">
        {props.games.map((item, index) =>  (
            <Game game={item} key={item.name}/>
        ))}
    </div>
    
}

export default Games;