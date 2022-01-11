//DATABASE
const users = [

    {
        userID: 'K419K419',
        username: 'Alexdesouza',
        password: 'fener1907',
        age: 28,
        createTime: '08/01/2022'
    }
];
//DATABASE

//ADD NEW USER TO DATABASE FUNCTION
function adduser() {

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = Number(document.getElementById('age').value);

    if(userName.length >0 && password.length >0 && age >= 1 ){
        
        
    //Get Time   
    var userDate = new Date().toLocaleDateString();
    //Get Time  

        
    //Create unique user id to define  

    const lettersForRandomId = ["A", "B", "C", "D", "F", "G", "H", "J", "K", "M"];
    let randomNumber = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 1000);
    let generatedID =
        lettersForRandomId[randomNumber] + randomNumber2 +
        lettersForRandomId[randomNumber] + randomNumber2;

    //Create unique user id to define   



    //Create new user and push to users     

    let newUser = {};
    newUser.userID = generatedID;
    newUser.username = userName;
    newUser.password = password;
    newUser.age = age;
    newUser.createTime = userDate;
    users.push(newUser);

    //Create new user and push to users   

    console.table(users);

        
    }
    
    else{
        console.log("Please fill the form...")
    }
    
    
};
//ADD NEW USER TO DATABASE FUNCTION