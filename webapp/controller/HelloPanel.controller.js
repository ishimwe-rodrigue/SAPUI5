sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.HelloPanel",
      {
        onShowHello: function () {
            //read message form i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView()
              .getModel()
              .getProperty("/recipient/name");
            var sMsgs = oBundle.getText("helloMsg", [sRecipient]);
    
            MessageToast.show(sMsgs);
          },

		onOpenDialog: function() {
          	this.getOwnerComponent().openHelloDialog();
		},

      }
    );
  }
);
