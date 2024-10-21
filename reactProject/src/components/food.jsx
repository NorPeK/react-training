function Food() {
    const food1 = "Apple";
    const food2 = "Strawberry";

    return(
        <ul>
            <li>Orange</li>
            <li>{food1}</li>
            <li>{food2.toLowerCase()}</li>
        </ul>
    )
}

export default Food