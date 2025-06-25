let Patient = require("./patient");
let Employee = require("./employee")
let HospitalView = require("./view");
console.log(Employee)

class HospitalController {
    static register(name, password, role) {
        Employee.register(name, password, role, (err, objArr) => {
            if (err) {
                HospitalView.ErrorView(err);
            } else {
                HospitalView.registerView(objArr);
            }
        });
    }

    static login(name, password) {
        Employee.login(name, password, (err, result) => {
            if (err) {
                HospitalView.loginError(err);
            } else {
                switch (result.status) {
                    case "already-login":
                        HospitalView.alreadyLogin(result.user);
                        break;
                    case "invalid-credentials":
                        HospitalController.invalidLogin();
                        break;
                    case "success":
                        HospitalView.loginSuccess(result.user);
                        break;
                }
            }
        });
    }

    static logout() {
        Employee.logout((err, result) => {
            if (err) {
                HospitalView.logoutError();
            } else {
                if (result.status === "no-user-logged-in") {
                    HospitalView.noUserLoggedIn();
                } else {
                    HospitalView.logoutSuccess(result.user);
                }
            }
        })
    }
    // lanjutkan command yang lain
}


module.exports = HospitalController;