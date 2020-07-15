const remoteURL = "http://localhost:5002"

export default {
  get(id, route, extras="") {
    return fetch(`${remoteURL}/${route}/${id}${extras}`).then(result => result.json())
  },
  getOwnerPets(route, extras) {
    return fetch(`${remoteURL}/${route}${extras}`).then(result => result.json())
  },
  getAll(route) {
    return fetch(`${remoteURL}/${route}`).then(result => result.json())
  },
  getRandomId(route) {
    return fetch(`${remoteURL}/${route}`)
      .then(result => result.json())
      .then(specials => {
        const randomIndex = Math.floor(Math.random() * specials.length);
        const randomSpecial = specials[randomIndex];
        return randomSpecial.id;
    });
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
  update(editedCard, route) {
    return fetch(`${remoteURL}/${route}/${editedCard.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCard)
    }).then(data => data.json());
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