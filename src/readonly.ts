class Users {
    readonly gender: Array<string> = ['male', 'female'];
}

const users = new Users();
// users.gender = ['men', 'women'] // cannot reassign because gender property is readonly
