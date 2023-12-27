class Animal{
    constructor(name){
        this._name = name
    }

    Hello(){
        alert("Good")
    }

    get name(){
        return this._name 
    }

}

let a = new Animal("Dog")
a.Hello()
console.log(a.name)