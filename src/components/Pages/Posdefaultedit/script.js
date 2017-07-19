import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Point Of Sale",
            btnlinks: {
                createbtnlink:"#/app/pos/posedit",
                importbtnlink:"#/app/pos/imported"
            },
            tableheader: [
                "Rule Name",
                "Type",
                "Encoding",
                "Barcode Pattern",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Price Barcodes 1 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
                "row1": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-14",
                        "24.....{NNNDD}",
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
                "row2": {
                    "data": [
                        "Price Barcodes 3 Decimals",
                        "Priced Product",
                        "EAN-15",
                        "25.....{NNNDD}",
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
                "row3": {
                    "data": [
                        "Price Barcodes 4 Decimals",
                        "Priced Product",
                        "EAN-16",
                        "26.....{NNNDD}",
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}