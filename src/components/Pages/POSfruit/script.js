import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posfruitwoedit from "./../../partials/Posfruitwoedit/Posfruitwoedit.vue"
import Posfruitedit from "./../../partials/Posfruitedit/Posfruitedit.vue"

export default{
    created: function () {
        document.title = this.title;

        $(function () {
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#contant').css("display");
                if(check == "none"){
                    $('#contant').show();
                    $('#contant1').hide();
                }else{
                    $('#contant').hide();
                    $('#contant1').show();
                }

            });
        });
    },
    props: [
        "edit"
    ],
    data () {
        return {
            title: "Partner Services - Sprout",
            head: "Pos Product Categories / Fruits and Vegetables",
            btnlinks: {
                createbtnlink: "/pointofsale/poscategoriescreate",
                editbtnlink: "/pointofsale/fruitss"
            },
            tableheader: [
                "Rule Name",
                "Type",
                "Encoding",
                "Barcode Pattern",


            ],

            tablefoot: [],
            tabledata: {
                "row": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
                    "url": "/#/app/pos/posdmodal"
                },
                "row1": {
                    "data": [
                        "Price Barcodes 2 Decimals",
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
                "row2": {
                    "data": [
                        "Price Barcodes 2 Decimals",
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
                "row3": {
                    "data": [
                        "Price Barcodes 2 Decimals",
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

            }
        }
    },




    components: {
        DashboardController,
        Posfruitwoedit,
        Posfruitedit
    }
}