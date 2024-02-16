const user = {
    username : "Deep",
    amount : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Deepanshu"
user.welcomeMessage()

console.log(this)