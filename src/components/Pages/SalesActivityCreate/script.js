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
                createbtnlink:"/Sales/newuser",
                discardbtnlink:"/Sales/salesactivity"
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
                    "url": "/Sales/salesactivityview"

                },
                "row1": {
                    "data": [
                        " Sales",
                        ""
                    ],
                    "url": "/Sales/salesactivityview"

                },
                "row2": {
                    "data": [
                        " Sales",
                        ""

                    ],
                    "url": "/Sales/salesactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}