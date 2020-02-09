export default class ProposalModel {
    constructor(parseModel) {
        this.id = parseModel.id;
        this.serviceType= parseModel.get("serviceType");
        this.dateModified= parseModel.get("dateModified");
        this.proposalName= parseModel.get("proposalName");
        this.proposalCoverText= parseModel.get("proposalCoverText");
        this.proposalOverView= parseModel.get("proposalOverView");
        this.ProposalWhyUs= parseModel.get("ProposalWhyUs");
        this.proposalCoverUrl= parseModel.get("proposalCoverUrl");
        this.proposalWhyUsUrl= parseModel.get("proposalWhyUsUrl");
        this.proposalCostUSD= parseModel.get("proposalCostUSD");
        this.projectDelivery= parseModel.get("projectDelivery");
        this.paymentType= parseModel.get("paymentType");
        this.paymentVariable= parseModel.get("paymentVariable");
        this.proposalItems= parseModel.get("proposalItems");
        this.ProposalStatus= parseModel.get("ProposalStatus");
        this.SenderUserID= parseModel.get("SenderUserID");
        this.RecieverUserID= parseModel.get("RecieverUserID");
    }
}


// {
//  -   "dateModified": "2018-11-12T13:13:45.958Z",
//  >>   "serviceType": "A string",
//  +   "proposalName": "A string",
//  >>   "proposalCoverUrl": "A string",
//  >>   "proposalCoverText": "A string",
//  >>  "proposalOverView": "A string",
//  >>   "ProposalWhyUs": "A string",
//  >>  "proposalWhyUsUrl": "A string",
//  >>  "proposalCostUSD": 1,
//  >>   "projectDelivery": "2018-11-12T13:13:45.958Z",
//  +   "paymentType": "A string",
//  +   "paymentVariable": "A string",
//  >>   "proposalItems": { "__type": "Relation", "className": "ServiceItems" },
//  +   "ProposalStatus": "A string",
//  +   "SenderUserID": { "__type": "Relation", "className": "_User" }
//  +   "RecieverUserID": { "__type": "Relation", "className": "Contacts" }
//   }

