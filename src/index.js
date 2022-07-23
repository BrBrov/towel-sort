
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if(arguments.length === 0){
        return result;
    }
    if(matrix.length === 0){
        return result;
    }
    matrix.forEach((val, i)=>{
        if(!(i%2)){
            val.forEach(element => {
                result.push(element);
            });
        }else{
            val.reverse().forEach(element=>{
                result.push(element);
            })
        }
    });
    return result;
}
