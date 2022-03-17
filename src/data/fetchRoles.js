export async function fetchRoles() {
  return await fetch('/roles')
    .then(response => response.json())
    .catch(error => console.log(error));
}