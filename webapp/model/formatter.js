sap.ui.define([], function () {
  "use strict";
  return {
    statusText: function (sStatus) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

      switch (sStatus) {
        case "A":
          return resourceBundle.getText("invoiceA");
        case "B":
          return resourceBundle.getText("invoiceB");
        case "C":
          return resourceBundle.getText("invoiceC");
        default:
          return sStatus;
      }
    },
  };
});
