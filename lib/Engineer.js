const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        // check if a url is a github profile (unfortunately the person who made it is anonymous/did not leave a name to credit)
        // https://regex101.com/library/8DSjjl <- regular expression by anonymous
        // https://regex101.com/r/8DSjjl/1 <- above regex in editor
        const gitRegex = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;

        if (!this.github) {
            throw new Error("Please input URL to Engineer's GitHub.");
        } else if (!gitRegex.test(this.github)) {
            throw new Error("Please enter a valid URL that contains 'http' or 'https', 'github', and 'userprofile'. Do not include spaces.");
        }
        return this.github;
    }
}

module.exports = Engineer;