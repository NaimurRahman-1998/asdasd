export const addClass = async classData => {
    const response = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/classes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}

export const addSelectClass = async classData => {
    const response = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/selected`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}


export const addPayments = async classData => {
    const response = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}
