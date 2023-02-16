export default function DISPLAY({value}){

    const tasklist = value.map((todo, index)=>{
        return (
            <p className="taskElement" key = {index}>{todo}</p>
        )
    })
    
    return(
        <div className="taskContainer">
            {tasklist}
        </div>
    )
}