export default class UserModel {
    constructor(parseModel) {
        this.UserID = parseModel.id;
        this.email = parseModel.get("email");
        this.fname = parseModel.get("fname");
        this.lname = parseModel.get("lname");
        this.username = parseModel.get("username");

    }
}