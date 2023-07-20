function Result(props){

    console.log(props.func)
    console.log(props.value)

    return <h1>{props.func(props.value)} - {props.jsx}</h1>
}

export default Result;