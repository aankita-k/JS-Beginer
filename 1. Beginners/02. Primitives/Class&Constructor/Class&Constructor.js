class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword (){
        return '${this.password}abc'
    }
}
const Anku = new user("Anku", "Anku@gmail.com", "123")

console.log(Anku.encryptPassword());