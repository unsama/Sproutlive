import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

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
            nextactivity: "Departments",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
<<<<<<< HEAD
                discardbtnlink: "#/app/sales/Salesnextactivityview",
=======
                discardbtnlink: "#/app/Sales/Salesnextactivityview",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                importbtnlink: "#/app/imported",
                secondbtnlink: "#/app/Employees/TableDep"
            },
            
        }
    },

    components: {
        DashboardController



    }

}