/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((ar) => {
        console.log(ar);
    });
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item) => {
        console.log(item);
    });
}

function addData() {
    //Write your code here, just console.log
    arr.push({
        id: 4,
        name: "Nita Ambani",
        age: 54,
        profession: "treachery",
    });

    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    let result = arr.filter((item) => item.profession !== "admin");
    console.log(result);
}

function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        {
            id: 6,
            name: "Ashish",
            age: 34,
            profession: "Sales",
        },
        {
            id: 7,
            name: "Prashant",
            age: 44,
            profession: "support",
        },
    ];

    console.log(arr.concat(newArr));
}
