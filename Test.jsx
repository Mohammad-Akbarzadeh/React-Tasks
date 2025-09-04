export default function Test(){

    let name = "Adrian"

    let Styles ={
        color:"blue",
        fontSize:"40px"
    }
    return(
        <div>
            <h1>Wellcome to {name} Project </h1>
            <h3 style={Styles}>Lorem ipsum dolor sit amet consectetur</h3>
        </div>
    )
}