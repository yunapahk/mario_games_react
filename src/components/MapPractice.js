function MapPractice(props){
    return <div>
        <h1>Map Practice</h1>
        {props.first.map((item, index) => <h2 key={index}>{item} - index: {index}</h2>)}
        {props.second.map((item, index) => <h2 key={index}>{item} - index: {index}</h2>)}
        {props.third.map((item, index) => <h2 key={index}>{item} - index: {index}</h2>)}
    </div>
}

export default MapPractice;