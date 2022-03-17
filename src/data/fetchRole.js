export async function fetchRoles() {
  return fetch(`/role/${roles.find(li => li.toggle.rich_text[0].plain_text === 'Administrators').id}`)
    .then(response => response.json())
    .then(admins => setIsAdmin(!!admins.find(_user => _user.paragraph.rich_text[0].mention.user.id === user.id)))
    .catch(error => console.log(error));
}