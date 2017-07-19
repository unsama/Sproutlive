import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Companycreatecompo from "./../../partials/Companycreatecompo/Companycreatecompo.vue"
<<<<<<< HEAD
import Modal from "./../../partials/Modal/Modal.vue"
=======
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83



export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Companies / New",
            title: "Import a File - Sprout",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"/setting/company"
            },

        }
    },

    components: {
        DashboardController,
<<<<<<< HEAD
        Companycreatecompo,
        Modal
=======
        Companycreatecompo
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
    }
}
