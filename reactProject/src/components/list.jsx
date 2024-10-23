function List() {

    const fruits = [
        {id: 1 ,name: "apple", calories: 95} ,
        {id: 2 ,name: "orange", calories :40} ,
        {id: 3 ,name: "banana", calories: 23} ,
        {id: 4 ,name: "coconut", calories: 122} , 
        {id: 5 ,name: "pineapple", calories: 44}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetic
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetic
    // fruits.sort((a,b) => a.calories - b.calories); // calories sort
    // fruits.sort((a,b) => b.calories - a.calories); // reverse calory sort
   
    const listItems = fruits.map(fruit =>
         <li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>);

   
    return(
        <ol>
            {listItems}
        </ol>
    );
}

export default List