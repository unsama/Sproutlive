import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates",
            title: 'Templates - Sprout',
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/setting/templatetablecreate",
                importbtnlink: "/setting/templatetableimport",
=======
                createbtnlink: "#/app/setting/templatetablecreate",
                importbtnlink: "#/app/setting/templatetableimport",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Template Name",
                "Model",
                "",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "template 1",
                        "partner 1",
                        "",

                    ],
<<<<<<< HEAD
                    "url": "/setting/templatetablein"
=======
                    "url": "/#/app/setting/templatetablein"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
                "row1": {
                    "data": [
                        "template 2",
                        "partner 2",
                        "",

                    ],
<<<<<<< HEAD
                    "url": "/setting/templatetablein"
=======
                    "url": "/#/app/setting/templatetablein"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
            }
        }
    },


    components: {
        DashboardController,
        TableMain

    }
}
