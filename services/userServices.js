let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

let users = [{
        id: 1,
        names: "Mario Araya",
        birth: new Date("1990/03/20"),
        email: "marioal_2008@hotmail.com"
    },
    {
        id: 2,
        names: "Sebastian Araya",
        birth: new Date("1992/08/25"),
        email: "saal192@hotmail.com"
    }
];

let salaries = [{
        id: 1,
        salary: 1800000,
        user: 1
    },
    {
        id: 1,
        salary: 700000,
        user: 2
    }
];

/**
 * Method for return all users array
 */
let getUsers = () => {
    return users;
}

/**
 * Method for find user on users array
 * @param {*} user The user JSON param
 */
let getSalaryByUser = (user) => {
    let salaryFinded = salaries.find((salary) => user.id === salary.user);
    if (salaryFinded) {
        return {
            id: salaryFinded.id,
            names: user.names,
            salary: formatter.format(salaryFinded.salary),
            user: salaryFinded.user
        };
    } else {
        return undefined;
    }
};

module.exports = {
    getSalaryByUser,
    getUsers
}