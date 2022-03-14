export function getRole(user) {
  fetch('/roles.json')
    .then(roles => roles.text())
    .then(roles => {
      console.log(roles);
    })
    .catch(error => console.log(error));
          

}