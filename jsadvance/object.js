const user={
    username:"Prakhar",
    password: 1234,
    signedIn: true,
    getDetails: function () {
        // console.log("Got user details from database");
        
    }
}
// console.log(user);
// console.log(user.password);
// console.log(user.getDetails());

function User(username,password,signedIn){
    this.username=username;
    this.password=password;
    this.signedIn=signedIn
    return this
}

const userOne=new User("Dhruv",4321,true)
console.log(userOne);
