import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#customerform').css("display");
                if(check == "none"){
                    $('#customerform').show();
                    $('#customeredit').hide();
                }else{
                    $('#customerform').hide();
                    $('#customeredit').show();
                }

            });

            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data () {
        return {
            activityimport: "Quotations / Import a File",
            btnlinks: {
                createbtnlink: "/timesheet/detailedactivity",
                discardbtnlink: "/timesheet/salescustomeredit",
                importbtnlink: "/timesheet/detailedactivityimport",
                cancelbtnlink:"/timesheet/detailedactivity"
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}