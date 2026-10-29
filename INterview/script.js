let searchBtn = document.getElementById("search");
let list = document.getElementById("name-list");

async function getListOfNames() {
    //loading =true
    // if(l) function()
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    //false
    console.log(data);

    data.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.name;
        list.append(li);
    });
}

searchBtn.addEventListener("input", (e) => {
    if (searchBtn.value.trim() === "") {
        alert("Empty");
        return;
    }

    let serachVal = searchBtn.value.toLowerCase();
    console.log(serachVal, "he");

    // console.log(serachVal.filter((Nname) => Nname === data.name));jj

    //matching items
});

getListOfNames();
