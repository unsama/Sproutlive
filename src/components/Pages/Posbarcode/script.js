import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Barcode Nomenclatures",
            title: 'Barcode Nomenclatures - Sprout',
            btnlinks: {
                createbtnlink:"#/posdefaultcreate",
                importbtnlink:"#/posbarcodeimport"
            },
            tableheader: [
                "Nomenclature Name",


            ],
            tablefoot: [
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Default Nomenclature",
                    ],
                    "url": "#/posdefault"
                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}