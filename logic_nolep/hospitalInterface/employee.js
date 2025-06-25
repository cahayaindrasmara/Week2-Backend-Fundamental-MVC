const fs = require('fs');

class Employee {
    constructor(username, password, position) {
        this.username = username;
        this.password = password;
        this.position = position;
        this.login = false;
    }

    static register(name, password, role, cb) {
        this.findAll((err, data) => {
            if (err) {
                console.log(err);
            } else {
                let obj = new Employee(name, password, role);
                let newData = data;
                newData.push(obj);
                let objArr = [];

                objArr.push(obj);
                objArr.push(newData.length);

                fs.writeFile("./employee.json", JSON.stringify(newData), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        cb(err, objArr)
                    }
                })
            }
        })
    }

    static login(name, password, cb) {
        this.findAll((err, data) => {
            if (err) {
                console.log(err)
            } else {
                //cek apakah sudah ada yang sedang login
                const alreadyLogin = data.find(emp => emp.login === true);
                if (alreadyLogin) {
                    return cb(null, { status: "already-login", user: alreadyLogin })
                }

                //cari user yang sesuai
                const found = data.find(emp => emp.username === name && emp.password === password);
                if (!found) {
                    return cb(null, { status: "invalid-credentials" })
                }
                found.login = true;

                fs.writeFile("./employee.json", JSON.stringify(data, null, 2), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        cb(null, { status: "success", user: found });
                    }
                })
            }
        })
    }

    static logout(cb) {
        this.findAll((err, data) => {
            if (err) {
                console.log(err);
            } else {
                //cari user yang sedang login
                const loggedInUser = data.find(emp => emp.login === true);

                if (!loggedInUser) {
                    return cb(null, { status: "no-user-logged-in" });
                }

                //ubah login menjadi false
                loggedInUser.login = false;

                fs.writeFile("./employee.json", JSON.stringify(data, null, 2), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        cb(null, { status: "success", user: loggedInUser });
                    }
                })
            }
        })
    }

    static findAll(cb) {
        fs.readFile("./employee.json", "utf8", (err, data) => {
            if (err) {
                if (err.code === "ENOENT") {
                    cb(null, [])// file belum ada
                } else {
                    cb(err)
                }
            } else {
                try {
                    const parsed = data.trim() === "" ? [] : JSON.parse(data);
                    cb(null, parsed);
                } catch (e) {
                    cb(e)
                }
            }
        })
    }
}

module.exports = Employee 