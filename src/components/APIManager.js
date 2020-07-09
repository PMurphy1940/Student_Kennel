const remoteURL = "http://localhost:5002"

export default {
  get(id, route) {
    return fetch(`${remoteURL}/${route}/${id}`).then(result => result.json())
  },
  getAll(route) {
      console.log(route)
    return fetch(`${remoteURL}/${route}`).then(result => result.json())
  },
  delete(id, route) {
    return fetch(`${remoteURL}/${route}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}