function Task({id, description, owner, startTime, endTime, duration, complete}) {

    return (
        <div>
            <p>ID: {id}</p>
            <p>Description: {description}</p>
            <p>Owner: {owner}</p>
            <p>Start Time: {startTime}</p>
            <p>End Time: {endTime}</p>
            <p>Duration: {duration}</p>
            <p>Complete: {complete}</p>
        </div>
    )
}

export default Task;
