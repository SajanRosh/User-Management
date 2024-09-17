let users = [];
let usersContainer = document.getElementById('usersContainer');
let alert = document.querySelector('#alert');
let counter = 1;

addUser = () =>{
    let name = document.getElementById('name');
    let email = document.querySelector('#email');
    let user = {
        id : counter,
        name : name.value,
        email : email.value
    }
    let ifUserExists = checkUser(email.value);

    if(ifUserExists == false){
        users.push(user); 
        alert.classList.add('success')
        alert.innerText = 'User added successfully';
        hideAlert();
        counter++;
    }else{
        alert.classList.add('danger');
        alert.innerText = 'Email already exists';
        hideAlert();
    }
    renderUsers();
}

renderUsers = () => {
    usersContainer.innerHTML = ''
    users.forEach((user) => {
        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');
        
        let deleteicon = document.createElement('img');
        let newUser = document.createElement('div');
        let deleteDiv = document.createElement('div');

        deleteDiv.value = user.id;
        div.value = user.id;

        deleteicon.src = "https://img.icons8.com/?size=48&id=VjYhRgCvzsVg&format=png";
        newUser.classList.add('newUser');
        deleteDiv.classList.add('deleteicon');

        name.innerText = user.name;
        email.innerText = user.email
        div.classList.add('users');
        
        usersContainer.appendChild(div);
        usersContainer.appendChild(newUser)
        div.appendChild(newUser)
        div.appendChild(deleteDiv)
        newUser.appendChild(name);
        newUser.appendChild(email);
    
        deleteicon.classList.add('deleteIcon')
        deleteDiv.appendChild(deleteicon);

        deleteicon.addEventListener('click',()=>{
           let deleteRowId = deleteDiv.value;
           let index = users.map(x=>x.id).indexOf(deleteRowId);   
           users.splice(index,1);
           div.style.display = 'none'

           alert.classList.add('success')
            alert.innerText = 'User removed successfully';
            hideAlert();
        })
    });
}
checkUser = (email) =>{
    let user = users.filter((x)=> { 
        return x.email == email
    }); 
    return user.length > 0 ? true : false;
}

hideAlert = () => {
    setTimeout(() => {
        alert.classList.remove('success', 'danger')
    },2000)
}
