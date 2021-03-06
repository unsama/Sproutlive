import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#salescreate').css("display");
                if(check == "none"){
                    $('#salescreate').show();
                    $('#salesedit').hide();
                }else{
                    $('#salescreate').hide();
                    $('#salesedit').show();
                }

            });
            CKEDITOR.replace( 'editor1' );
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });

    },
    data(){
        return {
            quotation: "Quotations / SO014",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/salesquotationview"
=======
                createbtnlink:"/Sales/salesnextactivitiescreate",
                importbtnlink:"/Sales/imported",
                discardbtnlink:"/Sales/salesquotationview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Product",
                "Description",
                "Ordered Qty",
                "Unit Price",
                "Taxes",
                "Subtotal"

            ],
            tablefooter:[
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain,
        Modal
    }
}
