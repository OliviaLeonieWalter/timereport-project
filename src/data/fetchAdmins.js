export async function fetchAdmins({ roles }) {
  return await fetch(`/role/${roles && roles.find(li => li.toggle.rich_text[0].plain_text === 'Administrators').id}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}