import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Scrap",
            title: "New - Oddo",
            btnlinks: {
                createbtnlink:"#/app/newuser",
                importbtnlink:"#/app/imported"
            },

            tabledata: {
                "row": {
                    "data": [
                        "Starting Inventory",
                        "01/28/2017 19:22:52",
                        "Validated",



                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "Starting Inventory",
                        "01/28/2017 19:22:52",
                        "Validated",



                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "Starting Inventory",
                        "01/28/2017 19:22:52",
                        "Validated",



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
        Topcontroller,
    }
}