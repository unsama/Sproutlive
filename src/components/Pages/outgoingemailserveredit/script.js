import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import outgoingemailservercreatecompo from "./../../partials/outgoingemailservercreatecompo/outgoingemailservercreatecompo.vue"



export default{
    created: function () {
        var self = this;
        this.select();
        $(function () {
            self.btnlinks.discardbtnlink = "/setting/outgoingemailserverin/"+self.$route.params.id;

        });
        document.title = this.title;
    },
    data () {
        return {
            title:"New - Sprout",
            head: "General Settings / Outgoing Mail Servers / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:""
            },


        }
    },


    components: {
        DashboardController,
        outgoingemailservercreatecompo


    }
}