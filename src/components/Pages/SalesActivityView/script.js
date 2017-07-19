import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#aview').css("display");
                if(check == "none"){
                    $('#aview').show();
                    $('#aedit').hide();
                }else{
                    $('#aview').hide();
                    $('#aedit').show();
                }

            });
        });

    },
    data () {
        return {
            activities: "Activities / Email",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesactivitycreate",
                importbtnlink:"/sales/app/imported",
                editbtnlink:"/sales/salesactivityedit",
=======
                createbtnlink:"/Sales/salesactivitycreate",
                importbtnlink:"/Sales/app/imported",
                editbtnlink:"/Sales/salesactivityedit",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Pricelist Name",
                "Currency"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Public Pricelist",
                        "USD"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesactivityview"
=======
                    "url": "/Sales/salesactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        " Sales",
                        ""
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesactivityview"
=======
                    "url": "/Sales/salesactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        " Sales",
                        ""

                    ],
<<<<<<< HEAD
                    "url": "/sales/salesactivityview"
=======
                    "url": "/Sales/salesactivityview"
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