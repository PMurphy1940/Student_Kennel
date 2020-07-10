const remoteURL = "http://localhost:5002"

export default {
  get(id, route) {
    return fetch(`${remoteURL}/${route}/${id}`).then(result => result.json())
  },
  getAll(route) {
    return fetch(`${remoteURL}/${route}`).then(result => result.json())
  },
  delete(id, route) {
    return fetch(`${remoteURL}/${route}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(newContent, route) {
      return fetch(`${remoteURL}/${route}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newContent)
      }).then(data => data.json())
  },
  uploadFile(file) {
    return fetch(`${remoteURL}/images`, {
      // content-type header should not be specified!
      method: 'POST',
      body: file,
    })
      .then(response => response.json())
      .then(success => {
        // Do something with the successful response
      })
      .catch(error => console.log(error)
    );
  }
}