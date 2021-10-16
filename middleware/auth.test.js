const auth = require("./auth")
// @ponicode
describe("auth", () => {
    test("0", () => {
        let callFunction = () => {
            auth({ user: "username", header: () => "Www.GooGle.com" }, { status: () => 500 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth({ user: "user123", header: () => "https://croplands.org/app/a/confirm?t=" }, { status: () => 200 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth({ user: "user-name", header: () => "http://base.com" }, { status: () => 400 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth({ user: "user-name", header: () => "https://croplands.org/app/a/reset?token=" }, { status: () => 429 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            auth({ user: 123, header: () => "https://api.telegram.org/bot" }, { status: () => 404 }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            auth(undefined, { status: () => NaN }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
