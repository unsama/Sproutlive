import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });
    },
    data () {
    return {
        nextactivity: "Inventory Adjustments / Starting Inventory",
        btnlinks: {
            discardbtnlink:"#/app/inventory/inventory_adjustments_table",
            importbtnlink:"#/app/imported",
            savebtnlink:"#/app/inventory/inventory_adjustments_table",
        },
        tableheader: [
            "Reference",
            "Destination Location Zone",
            "Partner",
            "Schduled Date",
            "Source Document",
            "Back Order Of",
            "Status",

        ],
        tabledata: {
            "row": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
<<<<<<< HEAD
                "url": "/#/app/sales/request_quotation_inner"
=======
                "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },
            "row1": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
<<<<<<< HEAD
                "url": "/#/app/sales/request_quotation_inner"
=======
                "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },
            "row2": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

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
    TableMain,
        DashboardController,
}
}