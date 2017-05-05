import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "My Reports",
            title: 'My Reports - Sprout',
            btnlinks: {
                createbtnlink: "/expenses/expensesreportscreate",
                importbtnlink: "/expenses/expensesreportsimport",
                firstbtnlink:"/expenses/expensessubmitgrid",
                secondbtnlink:"/expenses/expensessubmit",

            },
            tableheader: [
                "Expense Sheet",
                "Accounting Date",
                "Employee",
                "Total Amount",
                "Status",


            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "10.000",
                "",




            ],
            tabledata: {
                "row": {
                    "data": [
                        "Hotel Expenses",
                        "Travel",
                        "Employee",
                        "10.000",
                        "Submitted",


                    ],
                    "url": "/expenses/expensesreportsin"

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": "/expenses/expensesreportsin"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tablemain,
    },

}