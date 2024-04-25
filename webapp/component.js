sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
     "./controller/HelloDialog"
  ],
  function (UIComponent, JSONModel, Device, HelloDialog) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        //call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        //set data models
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        //set device model
        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device")

        //set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

        //create the views beased on the url/hash
        this.getRouter().initialize();
      }, 

      exit: function(){
        this._helloDialog.destroy();
        delete this._helloDialog
      },

      openHelloDialog: function(){
        this._helloDialog.open();
      }
    });
  }
);