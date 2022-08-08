sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var _oTaskFileModel = new sap.ui.model.json.JSONModel([
                    {
                        FileName:"A1",
                        HStatusGroupSequence:"A",
                        TaskFileUUID:"UUID1"
                    },
            
                   {
                       FileName:"B1",
                       HStatusGroupSequence:"B",
                       TaskFileUUID:"UUID2"
                   },
                   {
                       FileName:"A2",
                       HStatusGroupSequence:"A",
                       TaskFileUUID:"UUID3"
                   }						  
                   ]);
            
            this.getView().setModel(_oTaskFileModel, "TaskFileModel");
            }
        });
    });
