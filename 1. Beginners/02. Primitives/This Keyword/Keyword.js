console.log(this)

const obj = {
    name: "Ankita",
    lastName: "Verma",
    fulNmae: function(){
        return this.name;
    }
    
}

console.log(obj.fulNmae())