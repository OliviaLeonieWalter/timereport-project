export async function fetchRoles() {
  let output = {
    admin: [],
    productOwner: [],
    boss: []
  };

  const roles = await (
    fetch('/roles')
      .then(response => response.json())
      .catch(error => console.log(error))
  );

  for (let roleIndex = 0; roleIndex < roles.length; roleIndex++) {
    output[Object.keys(output)[roleIndex]] = await (
      fetch(`/role/${roles[roleIndex].id}`)
        .then(response => response.json())
        .then(response => {
          const users = [];

          for (let userIndex = 0; userIndex < response.length; userIndex++)
            users[userIndex] = response[userIndex].paragraph.rich_text[0].mention.user.id;

          return users;
        })
        .catch(error => console.log(error))
    );
  }

  return output;
}