"use strict";
class Users {
    constructor() {
        this.gender = ['male', 'female'];
    }
}
const users = new Users();
// users.gender = ['men', 'women'] // cannot reassign because gender property is readonly
