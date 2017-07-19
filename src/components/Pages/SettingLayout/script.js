import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Setting',
            sidebarData: {
<<<<<<< HEAD
                Dashboard: "/setting/setting",
=======
                Dashboard: "/setting/",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                Users: [
                    {
                        url: "/setting/users",
                        title: "Users"
                    },
                    {
                        url: "/setting/company",
                        title: "Companies"
                    },
                ],
                GeneralSettings: "/setting/generalsetting",
                Translations:[
                    {
                        url: "/setting/setting",
                        title: "Load a Translation"
                    },
                ],
                GoogleDrive:[
                    {
                        url: "/setting/Templatetable",
                        title: "Templates"
                    },
                ],
            }
        }
    },
    components: {
        Sidebar,
        Topcontroller
    }

}