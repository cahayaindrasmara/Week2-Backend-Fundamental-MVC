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

    static addPatientSuccess(objArrPatient) {
        console.log(`Berhasil menambahkan pasien dengan nama ${objArrPatient[0].nama}`)
    }

    static addPatientDuplicate(objArrPatient) {
        console.log(`ID telah diisi dengan nama ${objArrPatient.nama}`)
    }

    static addPatientBeforeLogin(objArrPatient) {
        console.log(`Silahkan Login Dahulu`)
    }

    static addPatientNotDoctor(objArrPatient) {
        console.log(`Bukan Akun Dokter`)
    }

    static addPatientError(err) {
        console.log(`gagal`)
    }

    static updatePatientSuccess(objArrPatient) {
        console.log(`Berhasil memperbarui data pasien dengan nama ${objArrPatient.nama}`)
    }

    static updatePatientError() {
        console.log("gagal")
    }

    static deletePatientSuccess(objArrPatient) {
        console.log(`Berhasil menghapus data pasien`)
    }

    static deletePatientError() {
        console.log("gagal")
    }

    static showSuccess(type, parsed) {
        console.log(`data dari ${type}: \n${JSON.stringify(parsed, null, 2)}`)
    }

    static showBeforeLogin() {
        console.log("silahkan login dahulu")
    }

    static showNotAdmin() {
        console.log("Bukan akun admin")
    }

    static showError() {
        console.log("gagal")
    }
}

module.exports = HospitalView;