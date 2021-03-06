const Engineer = require('../lib/Engineer');

describe("Engineer tests", () => {
    describe("Initialisation", () => {
        // positive test
        test("New Engineer should contain four parameters: name, ID, email, GitHub-URL", () => {
            const validEngineer = new Engineer("Jimothy Jones", 3, "email@email.com", "http://github.com/JimothyJones");

            expect(validEngineer.getName()).toEqual("Jimothy Jones");
            expect(validEngineer.getId()).toEqual(3);
            expect(validEngineer.getEmail()).toEqual("email@email.com");
            expect(validEngineer.getGitHub()).toEqual("http://github.com/JimothyJones");
        })
        // positive test
        test("New Engineer should get assigned role = Engineer", () => {
            const validEngineer = new Engineer("Jimothy Jones", 3, "email@email.com", "http://github.com/JimothyJones");

            expect(validEngineer.role).toEqual("Engineer");
        })
    })

    describe("GitHub URL validation", () => {
        // positive test
        test("GitHub URL should be a valid URL containing 'http' or 'https', 'github', and 'userprofile', and without any spaces", () => {
            const validEngineer = new Engineer("Jimothy Jones", 3, "email@email.com", "http://github.com/JimothyJones");
            const validGitHub = validEngineer.getGitHub();

            // regex to make sure the URL format is: http(s)://(www.)github.string/userstring (characters in brackets optional)
            const gitRegex = /^https?:\/\/(www\.)?(github\.)([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;

            expect(gitRegex.test(validGitHub)).toEqual(true);
        })

        // exception test
        test("Should fail if GitHub URL is an empty string", () => {
            const invalidEngineer = new Engineer("Jimothy Jones", 3, "email@email.com", "");
            const err = "Please input URL to Engineer's GitHub.";

            expect(() => {
                invalidEngineer.getGitHub();
            }).toThrow(err);
        })
        // exception test
        test("Should fail if GitHub URL does not contain 'http' or 'https'", () => {
            const invalidEngineers = [
                new Engineer("Jimothy Jones", 3, "email@email.com", "github.com/user"),
                new Engineer("Ron Weasley", 4, "email@email.com", "www.github.com/u"),
                new Engineer("Ash Ketchum", 5, "email@email.com", "github.com")
            ];
            const err = "Please enter a valid GitHub URL. Remember to include 'http' OR 'https' and user profile.";

            expect(() => {
                invalidEngineers.forEach(Engineer => {
                    Engineer.getGitHub();
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if GitHub URL does not contain 'github'", () => {
            const invalidEngineers = [
                new Engineer("Jimothy Jones", 3, "email@email.com", "http://facebook.com"),
                new Engineer("Ron Weasley", 4, "email@email.com", "https://githu.com"),
                new Engineer("Ash Ketchum", 5, "email@email.com", "http://www.git.io/ashketchum")
            ];
            const err = "Please enter a valid GitHub URL. Remember to include 'http' OR 'https' and user profile.";

            expect(() => {
                invalidEngineers.forEach(Engineer => {
                    Engineer.getGitHub();
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if GitHub URL does not contain 'userprofile'", () => {
            const invalidEngineers = [
                new Engineer("Jimothy Jones", 3, "email@email.com", "http://www.github.com/"),
                new Engineer("Ron Weasley", 4, "email@email.com", "https://github.com")
            ];
            const err = "Please enter a valid GitHub URL. Remember to include 'http' OR 'https' and user profile.";

            expect(() => {
                invalidEngineers.forEach(Engineer => {
                    Engineer.getGitHub();
                })
            }).toThrow(err);
        })
        // exception test
        test("Should fail if GitHub URL contains spaces", () => {
            const invalidEngineers = [
                new Engineer("Jimothy Jones", 3, "email@email.com", "http://www.github .com/JimothyJones"),
                new Engineer("Ron Weasley", 4, "email@email.com", "https:// github.com/RW"),
                new Engineer("Ash Ketchum", 5, "email@email.com", "ht tp://www. github.io/ashketchum")
            ];
            const err = "Please enter a valid GitHub URL. Remember to include 'http' OR 'https' and user profile.";

            expect(() => {
                invalidEngineers.forEach(Engineer => {
                    Engineer.getGitHub();
                })
            }).toThrow(err);
        })
    })
})