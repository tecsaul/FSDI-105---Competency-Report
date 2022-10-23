function displayUsers(usersArray) {
    //travel the array of users
    let table = "";
    //get the user
    for (let i = 0; i < usersArray.length; i++) {
        let users = usersArray[i];
        //create the html row
        table += `
        <tr>
        <td>${users.email}</td>
        <td>${users.password}</td>
        <td>${users.fName}</td>
        <td>${users.lName}</td>
        <td>${users.age}</td>
        <td>${users.address}</td>
        <td>${users.phone}</td>
        <td>${users.payment}</td>
        <td>${users.color}</td>
        </tr>`;
        //append the user into the table
        $("#users-table").append(table);
    }
    

}
function init() {
    console.log("Listing users ...");
    let users = readUser();//getting the users from LS
    displayUsers(users);//display the users
}
window.onload = init;