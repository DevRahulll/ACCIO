const b = () => {
    console.log("B outside called");
};
function a() {
    console.log("A called");
    b();
    return "done";
    // const b = () => {
    //     console.log("B inside called");
    // };
}
console.log(a());
