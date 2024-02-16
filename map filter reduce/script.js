const users = [
    {firstName:"Deepanshu", lastName:"Sharma", age:21},
    {firstName:"Elon", lastName:"Musk", age:56},
    {firstName:"Deep", lastName:"Sharma", age:21},
    {firstName:"Donald", lastName:"Trump", age:74}
]

// list of full names
const output = users.map(x => x.firstName + " " + x.lastName)

console.log(output)



// ac = {21 : 2, 56 : 1, 74 : 1}

const ac = users.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age] += 1;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(ac);



// ["deepanshu", "deep"]     -> users with age < 30
const op = (users.filter((x) => x.age < 30)).map((x) => x.firstName);

console.log(op);



// above problem using reduce
const outpt = users.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(outpt);