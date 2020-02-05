
export default class TemplateModel {
    constructor(parseModel) {
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

// const Templates = Parse.Object.extend('Templates');
// const query = new Parse.Query(Templates);
// query.equalTo("serviceType", 'A string');
// query.equalTo("dateModified", new Date());
// query.equalTo("templateName", 'A string');
// query.equalTo("CoverText", 'A string');
// query.equalTo("OverView", 'A string');
// query.equalTo("WhyUs", 'A string');
// query.equalTo("CoverUrl", 'A string');
// query.equalTo("serviceItems", new Parse.Object("ServiceItems"));
// query.equalTo("WhyUsUrl", 'A string');
// query.equalTo("serviceChargeQty", 1);
// query.equalTo("serviceCostUSD", 1);
// query.equalTo("serviceDelivery", new Date());
// query.equalTo("paymentType", 'A string');
// query.equalTo("paymentVariable", 'A string');
// query.find().then((results) => {
//   // You can use the "get" method to get the value of an attribute
//   // Ex: response.get("<ATTRIBUTE_NAME>")
//   if (typeof document !== 'undefined') document.write(`Templates found: ${JSON.stringify(results)}`);
//   console.log('Templates found', results);
// }, (error) => {
//   if (typeof document !== 'undefined') document.write(`Error while fetching Templates: ${JSON.stringify(error)}`);
//   console.error('Error while fetching Templates', error);
// });