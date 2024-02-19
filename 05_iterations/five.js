const coding = ["cpp" , "ruby" , "python"]

coding.forEach(function (items) {
    // console.log(items)
})

coding.forEach((values) => {
    // console.log(values);
    
})

function printme(items) {
    console.log(items)
}

// coding.forEach(printme)

coding.forEach((item , index , arr) =>{
    // console.log(item , index , arr);
})

//+++++++++++++ important(how to get keys and values of object(more than one) which is in the array)
const myCoding = [
    {
        langName : "java",
        fileName : "java"
    } ,
    {
        langName : "python",
        fileName : "py"
    } ,
    {
        langName : "c++",
        fileName : "cpp"
    }
]

myCoding.forEach((values) =>{
    console.log(values.fileName);
})