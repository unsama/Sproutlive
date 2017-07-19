import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import CalendarT from "./../../partials/CalendarT/CalendarT.vue"
import Barchart from "./../../partials/Barchart/Barchart.vue"

export default{
    created: function () {
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });

        });
    },
    data () {
        return {
            dashboard: "Dashboard",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/Salesnextactivityview",
                importbtnlink: "/sales/imported"
=======
                createbtnlink: "/Sales/salescustomeredit",
                discardbtnlink: "/Sales/Salesnextactivityview",
                importbtnlink: "/Sales/imported"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },

    components: {
        DashboardController,
        CalendarT



    }

}