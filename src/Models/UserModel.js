export default class UserModel {
    constructor(parseModel) {
        this.UserID = parseModel.id;
        this.UserType = parseModel.get("UserType");
        this.email = parseModel.get("email");
        this.fname = parseModel.get("fname");
        this.lname = parseModel.get("lname");
        this.username = parseModel.get("username");
        this.industryField = parseModel.get("IndustryField")
    }
}

// {
//     "objectId": "4BwpMWdCnm",
//     "username": "A string",
//     "email": "A string",
//     "fname": "A string",
//     "lname": "A string",
//     "UserType": "A string",
//     "IndustryField": "A string",
//     "password": "#Password123",
//     "createdAt": "2018-11-06T00:52:01.520Z",
//     "updatedAt": "2018-11-06T00:52:04.713Z"
//   }