class HospitalView {
    static registerView(objArr) {
        console.log(`save data success {"username":${objArr[0].username}, "password":${objArr[0].password}, "role":${objArr[0].position}. Total Employee: ${objArr[1]}}`);
    }

    static loginSuccess(user) {
        console.log(`successfully logged in as ${user.username} a ${user.position}`)
    }

    static alreadyLogin(user) {
        console.log(`someone has logged in: ${user.username}`)
    }

    static invalidLogin() {
        console.log("incorrect username or password");
    }

    static loginError(err) {
        console.log(err)
    }

    static logoutSuccess(user) {
        console.log(`${user.username} as ${user.position} successfully logged out.`)
    }

    static noUserLoggedIn() {
        console.log("No users are currently logged in")
    }

    static logoutError(err) {
        console.log(err)
    }
}

module.exports = HospitalView;