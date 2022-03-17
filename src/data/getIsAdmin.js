import { fetchAdmins } from "./fetchAdmins"
import { fetchRoles } from "./fetchRoles"

export async function getIsAdmin({ userID }) {
  return await fetchAdmins(await fetchRoles()).find(user => user.paragraph.rich_text[0].mention.user.id === userID)
}