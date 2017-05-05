import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Discuss',
            sidebarData: {
                Dashboard: { url: "#/",title: "Dashboard" },
                Purchase: [
                    {
                        url: "#/app/purchase/request_quotation",
                        title: "Requests for Quotation"
                    },
                    {
                        url: "#/app/purchase/purchase_order",
                        title: "Purchase Orders"
                    },
                    {
                        url: "#/app/purchase/vendor",
                        title: "Vendors"
                    },
                    {
                        url: "#/app/purchase/products",
                        title: "Products"
                    },
                    {
                        url: "#/app/purchase/entry_gate",
                        title: "Gate Entry"
                    }
                ],
                Control: [
                    {
                        url: "#/app/purchase/incoming_products",
                        title: "Incoming Products"
                    },
                    {
                        url: "#/app/purchase/vendor_bills",
                        title: "Vendor Bills"
                    },

                ],
                Reports: { url: "#/",title: "Reports" },
                Configuration: [
                    {
                        url: "#/app/purchase/setting",
                        title: "Settings"
                    },

                ],
                

            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
    }

}