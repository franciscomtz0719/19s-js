const filterUsers = (usersArray, strToFilter) => {
    let lowerCaseTerm = strToFilter ? strToFilter.toLowerCase() : "";
  
    let usersList = document.getElementById("lista__users");
  
    usersList.innerHTML = createGroupItemTemplate(
      usersArray.filter((user) => {
        return (
          user.name.toLowerCase().includes(lowerCaseTerm) ||
          user.email.toLowerCase().includes(lowerCaseTerm) ||
          user.username.toLowerCase().includes(lowerCaseTerm)
        );
      })
    );
  };
  
  const createGroupItemTemplate = (usersArray) => {
    let template = "";
  
    if (usersArray) {
      usersArray.forEach((user, index) => {
        template += `
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${user.name}</h5>
              <small>${index + 1} days ago</small>
              </div>
              <p class="mb-1">${user.email}</p>
              <small>${user.phone}</small>
          </a>
        `;
      });
    }
  } 