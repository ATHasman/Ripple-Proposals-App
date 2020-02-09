
export default class TemplateModel {
    constructor(parseModel) {
        this.id = parseModel.id;
        this.serviceType= parseModel.get("serviceType");
        this.dateModified= parseModel.get("dateModified");
        this.templateName= parseModel.get("templateName");
        this.CoverText= parseModel.get("CoverText");
        this.OverView= parseModel.get("OverView");
        this.WhyUs= parseModel.get("WhyUs");
        this.CoverUrl= parseModel.get("CoverUrl");
        this.WhyUsUrl= parseModel.get("WhyUsUrl");
         this.serviceChargeQty= parseModel.get("serviceChargeQty");
        this.serviceCostUSD= parseModel.get("serviceCostUSD");
        this.serviceDelivery= parseModel.get("serviceDelivery");
        this.paymentType= parseModel.get("paymentType");
        this.paymentVariable= parseModel.get("paymentVariable");
    }
}

// {
//     "serviceType": "A string",
//     "dateModified": "2018-11-12T13:13:45.958Z",
//     "templateName": "A string",
//     "CoverText": "A string",
//     "OverView": "A string",
//     "WhyUs": "A string",
//     "CoverUrl": "A string",
//     "serviceItems": { "__type": "Relation", "className": "ServiceItems" },
//     "WhyUsUrl": "A string",
//     "serviceChargeQty": 1,
//     "serviceCostUSD": 1,
//     "serviceDelivery": "2018-11-12T13:13:45.958Z",
//     "paymentType": "A string",
//     "paymentVariable": "A string"
//   }