export default class ServicItemsModel {
    constructor(parseModel) {
        this.serviceDescription= parseModel.get("serviceDescription");
        this.serviceName= parseModel.get("serviceName");
        this.serviceField= parseModel.get("serviceField");
        this.serviceType= parseModel.get("serviceType");
        this.serviceChargeBy= parseModel.get("serviceChargeBy");
        this.serviceChargePrice= parseModel.get("serviceChargePrice");
        this.isProjectBased= parseModel.get("isProjectBased");
        this.serviceChargeQty= parseModel.get("serviceChargeQty");
        
    }
}

// {
//     "serviceDescription": "A string",
//     "serviceName": "A string",
//     "serviceField": "A string",
//     "serviceType": "A string",
//     "serviceChargeBy": "A string",
//     "serviceChargePrice": 1,
//     "isProjectBased": true,
//     "serviceChargeQty": 1
//   }