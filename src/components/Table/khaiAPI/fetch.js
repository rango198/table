const baseURL = 'https://65c123aedc74300bce8d6244.mockapi.io/api/contacts';

export const getContacts = () => {
  return fetch(baseURL).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};

export const addContact = data => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
};
export const delContact = id => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
export const editContact = data => {
  return fetch(`${baseURL}/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
};
