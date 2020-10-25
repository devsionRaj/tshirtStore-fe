const { API } = require("../../backend");

// category calls
// create
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

// get Categories
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return data.json();
        }
    }).catch(err => console.log(err))
}

// get one category
export const getCategory = (categoryId) => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    }).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return data.json();
        }
    }).catch(err => console.log(err))
}

// delete Categories
export const deleteCategories = (categoryId, userId, token) => {
    return fetch(`${API}/category/${categoryId}/${userId}/`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return data.json
        }
    }).catch(err => console.log(err))
}

// update category
export const updateCategory = (categoryId, userId, token, category) => {
    console.log('Update category parameters');
    console.log('the categoryId:', categoryId);
    console.log('the userId:', userId);
    console.log('the token:', token);
    console.log('the category:', category)
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response => {
        console.log('the response received is:', response);
        return response.json()
    }).catch(err => console.log('the error received is:', err))
}

// product calls
// create a product
export const createaProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

// get all products
export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

// delete a product
export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

// get a product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

// update a product
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}