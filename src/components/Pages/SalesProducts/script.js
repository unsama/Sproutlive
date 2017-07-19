import Product_Boxes from "./../../partials/Product_Boxes/Product_Boxes.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function(){
        document.title = this.title;
        console.log("this is some check")
    },
    data () {
        return {
            salesproducts: "Products",
            title: "Products - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salesproductcreate",
                importbtnlink: "/sales/imported",
                firstbtnlink:"/sales/products",
                secondbtnlink:"/sales/salesproductlistview"
=======
                createbtnlink: "/Sales/salesproductcreate",
                importbtnlink: "/Sales/imported",
                firstbtnlink:"/Sales/products",
                secondbtnlink:"/Sales/salesproductlistview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },

    components: {
        DashboardController,
        Product_Boxes


    }

}