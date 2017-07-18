import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Discuss',
            sidebarData: {
                Dashboard: "/Sales",
                Sales: [
                    {
                        url: "/Sales/customers",
                        title: "Customer"
                    },
                    {
                        url: "/Sales/pipeline",
                        title: "My Pipeline"
                    },
                    {
                        url: "/Sales/nextactivities",
                        title: "Next Activities"
                    },
                    {
                        url: "/Sales/quotation",
                        title: "Quotations"
                    },
                    {
                        url: "/Sales/order",
                        title: "Sales Orders"
                    },
                    {
                        url: "/Sales/products",
                        title: "Products"
                    }
                ],
                Invoicing:[
                    {
                        url: "/Sales/salesofinvoices",
                        title: "Sales of Invoice"
                    },
                    {
                        url: "/Sales/orderstoupsell",
                        title: "Orders to Upsell"
                    }
                ],
                Reports:[
                    {
                        url: "/Sales/salespipelinereport",
                        title: "Pipeline"
                    },
                    {
                        url: "/Sales/salesreportactivity",
                        title: "Activities"
                    },
                    {
                        url: "/Sales/salesreport",
                        title: "Sales"
                    }
                ],
                Configuration:[
                    {
                        url: "/Sales/salessettings",
                        title: "Settings"
                    },
                    {
                        url: false,
                        title: "Pricelists",
                        childrens:[
                            {
                                url: "/Sales/salespricelists",
                                title: "Pricelists"
                            }
                        ]
                    },
                    {
                        url: false,
                        title: "Lead & Opportunities",
                        childrens:[
                            {
                                url: "/Sales/salesactivity",
                                title: "Activities"
                            }
                        ]
                    },
                    {
                        url: "/Sales/salesteams",
                        title: "Sales Teams"
                    }
                ],
            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,

    }

}