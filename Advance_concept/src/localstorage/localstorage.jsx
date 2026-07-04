function localstorage(){

    // const user ={
    //     username:'aanjali' , 
    //     age:18,
    //     city:"delhi"
    // }

    // console.log(user);

    // localStorage.setItem('user' , JSON.stringify(user));

    const user1 = JSON.parse(localStorage.getItem('user'));
    console.log(user1);
    return(
        <div>
            <h1>this is a localstorage</h1>
        </div>
    )
}

export default localstorage;