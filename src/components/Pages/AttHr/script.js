import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {

        $(function(){
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
            $(document).ready(function(){
                $(".btn.btn-success.b").click(function(){
                    $("#panel").slideToggle("slow");
                });
            });

            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#edit1').css("display");
                if(check == "none"){
                    $('#edit1').show();
                    $('#main1').hide();
                }else{
                    $('#edit1').hide();
                    $('#main1').show();
                }

            });

            document.title = this.title;
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $(document).ready(function () {
                var d = new Date();
                var hour    = d.getHours();
                var minute  = d.getMinutes();
                var second  = d.getSeconds();
                var time = hour+":"+minute+":"+second;
                $("#demo").html(time);
            });
        });

    },
    data(){
        return {
            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,

            u:false,
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Attendances/Administrators from 2017-02-11 09:00:00 to 2017-02-11 13:00:00/Administrators",
            btnlinks: {
                createbtnlink:"#/app/attendance/Attcreate",
                importbtnlink:"#/app/imported",
                editbtnlink:"#/app/attendance/AttHrEdit",
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
        Emptyform,
        Tabs,
        Modal,
        ModelDescription,
        Componame,
        DashboardController,
        Tableview,
        Editing,
        Request_quotation_lower,
        Message,




    }

}
