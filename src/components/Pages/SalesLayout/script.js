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
<<<<<<< HEAD
                Dashboard: "/sales",
                Sales: [
                    {
                        url: "/sales/customers",
                        title: "Customer"
                    },
                    {
                        url: "/sales/pipeline",
                        title: "My Pipeline"
                    },
                    {
                        url: "/sales/nextactivities",
                        title: "Next Activities"
                    },
                    {
                        url: "/sales/quotation",
                        title: "Quotations"
                    },
                    {
                        url: "/sales/order",
                        title: "Sales Orders"
                    },
                    {
                        url: "/sales/products",
=======
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
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                        title: "Products"
                    }
                ],
                Invoicing:[
                    {
<<<<<<< HEAD
                        url: "/sales/salesofinvoices",
                        title: "Sales of Invoice"
                    },
                    {
                        url: "/sales/orderstoupsell",
=======
                        url: "/Sales/salesofinvoices",
                        title: "Sales of Invoice"
                    },
                    {
                        url: "/Sales/orderstoupsell",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                        title: "Orders to Upsell"
                    }
                ],
                Reports:[
                    {
<<<<<<< HEAD
                        url: "/sales/salespipelinereport",
                        title: "Pipeline"
                    },
                    {
                        url: "/sales/salesreportactivity",
                        title: "Activities"
                    },
                    {
                        url: "/sales/salesreport",
=======
                        url: "/Sales/salespipelinereport",
                        title: "Pipeline"
                    },
                    {
                        url: "/Sales/salesreportactivity",
                        title: "Activities"
                    },
                    {
                        url: "/Sales/salesreport",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                        title: "Sales"
                    }
                ],
                Configuration:[
                    {
<<<<<<< HEAD
                        url: "/sales/salessettings",
=======
                        url: "/Sales/salessettings",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                        title: "Settings"
                    },
                    {
                        url: false,
                        title: "Pricelists",
                        childrens:[
                            {
<<<<<<< HEAD
                                url: "/sales/salespricelists",
=======
                                url: "/Sales/salespricelists",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                                title: "Pricelists"
                            }
                        ]
                    },
                    {
                        url: false,
                        title: "Lead & Opportunities",
                        childrens:[
                            {
<<<<<<< HEAD
                                url: "/sales/salesactivity",
=======
                                url: "/Sales/salesactivity",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                                title: "Activities"
                            }
                        ]
                    },
                    {
<<<<<<< HEAD
                        url: "/sales/salesteams",
=======
                        url: "/Sales/salesteams",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
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