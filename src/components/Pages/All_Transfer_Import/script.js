import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;
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
        title: "Import a File - Sprout",
        btnlinks: {
<<<<<<< HEAD
            createbtnlink: "/sales/salescustomercreate",
            discardbtnlink: "/sales/salescustomeredit",
            importbtnlink: "/sales/salesnextactivityimport",
=======
            createbtnlink: "/Sales/salescustomercreate",
            discardbtnlink: "/Sales/salescustomeredit",
            importbtnlink: "/Sales/salesnextactivityimport",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            cancelbtnlink:"/inventory/all_transfers"
        },
    }
},
components: {
    DashboardController,
        Imported
}
}