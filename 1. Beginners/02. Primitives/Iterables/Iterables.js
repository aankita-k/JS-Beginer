function fruitsIterator(values){
    let nextIndex = 0;

    return{
        next:function(){
            if(nextIndex < values.length)

            return{
                value: values[nextIndex++],
                done:false
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}

const myArray = ['Apple', 'grapes', 'orange'];
console.log("my array is", myArray)

const fruits = fruitsIterator(myArray);

console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)