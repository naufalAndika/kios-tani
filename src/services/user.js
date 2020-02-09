const User = require('../models/user')

const create = async (data) => {
    const user = new User(data)

    try {
        await user.save()
        return {
            user
        }
    } catch (e) {
        throw e
    }
}

const login = async (email, password) => {
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()

        return {
            user,
            token
        }
    } catch (e) {
        throw e
    }
}

const logout = async (user) => {
    try {
        user.tokens = []
        await user.save()
        return "Logout success"
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    login,
    logout
}
