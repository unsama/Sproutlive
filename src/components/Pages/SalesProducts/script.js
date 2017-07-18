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
                createbtnlink: "/Sales/salesproductcreate",
                importbtnlink: "/Sales/imported",
                firstbtnlink:"/Sales/products",
                secondbtnlink:"/Sales/salesproductlistview"
            },
        }
    },

    components: {
        DashboardController,
        Product_Boxes


    }

}