function userdetails(props){
    return(
        <div className="container">
            <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Salary: {props.salary}</p>
            <p>Job-Title: {props.jobtitle}</p>
            <p>Position: {props.position}</p>
            <p>Description: {props.description}</p>
            </div>
        </div>
    )
}

export default userdetails;