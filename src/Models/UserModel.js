export default class UserModel {
    constructor(parseModel) {
        this.UserID = parseModel.id;
        this.email = parseModel.get("email");
        this.email = parseModel.get("fname");
        this.email = parseModel.get("lname");
       

    }
}