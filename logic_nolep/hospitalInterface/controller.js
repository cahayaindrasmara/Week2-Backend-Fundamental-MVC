let Patient = require("./patient");
let Employee = require("./employee")
let HospitalView = require("./view");
// console.log(Employee)

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

    static addPatient(id, nama, penyakit1, penyakit2) {
        Patient.addPatient(id, nama, penyakit1, penyakit2, (err, result) => {
            if (err) {
                HospitalView.addPatientError()
            } else {
                if (result.status === "please-login") {
                    HospitalView.addPatientBeforeLogin();
                } else if (result.status === "not-a-doctor") {
                    HospitalView.addPatientNotDoctor();
                } else if (result.status === "duplicate-id") {
                    HospitalView.addPatientDuplicate();
                } else {
                    HospitalView.addPatientSuccess(result.patient)
                }
            }
        })
    }

    static updatePatient(id, nama, penyakit1, penyakit2) {
        Patient.updatePatient(id, nama, penyakit1, penyakit2, (err, result) => {
            if (err) {
                HospitalView.updatePatientError();
            } else {
                HospitalView.updatePatientSuccess(result);
            }
        })
    }

    static deletePatient(id, nama, penyakit1, penyakit2) {
        Patient.deletePatient(id, nama, penyakit1, penyakit2, (err, result) => {
            if (err) {
                HospitalView.deletePatientError();
            } else {
                HospitalView.deletePatientSuccess(result);
            }
        })
    }

    static show(type) {
        Employee.show(type, (err, result) => {
            if (err) {
                HospitalView.showError();
            } else {
                if (result.status === "please-login") {
                    HospitalView.showBeforeLogin();
                } else if (result.status === "not-a-admin") {
                    HospitalView.showNotAdmin();
                } else {
                    HospitalView.showSuccess(type, result)
                }
            }
        })
    }
    // lanjutkan command yang lain
}


module.exports = HospitalController;