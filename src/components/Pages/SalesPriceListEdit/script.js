import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#pshow').css("display");
                if(check == "none"){
                    $('#pshow').show();
                    $('#pedit').hide();
                }else{
                    $('#pshow').hide();
                    $('#pedit').show();
                }

            });

        });
    },
    data () {
        return {
            pricelists: "Pricelists / Public Pricelist (USD)",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salespricelistscreate",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/salespricelistsview"
=======
                createbtnlink:"/Sales/salespricelistscreate",
                importbtnlink:"/Sales/imported",
                discardbtnlink:"/Sales/salespricelistsview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Name"


            ],
            tablefooter: [
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Add an Items",

                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "",

                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "",


                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        TableMain,
        Modal
    }
}