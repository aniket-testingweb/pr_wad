const userDataArray = JSON.parse(localStorage.getItem('userData')) || [];
const userDataList = document.getElementById('userDataList');

userDataArray.forEach(function (userData) {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${userData.fullName}, Email: ${userData.email}`;
    userDataList.appendChild(listItem);
});
