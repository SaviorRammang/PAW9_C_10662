import VueRouter from "vue-router";
import Vue from "vue";


Vue.use(VueRouter);

function importComponent(path){
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
    mode: "history",
    routes:[
        {
            path:"/",
            name:"admin",
            component: importComponent("DashboardLayout"),
            children:[
                //Dashboard
                {
                    path: "/",
                    name: "Root",
                    component: importComponent("DashboardIndex")
                },
                //To Do List
                {
                    path:"/gd",
                    name:"Guided",
                    component: importComponent("TodoList/ListItem"),
                },
                {
                    path: "/ugd",
                    name: "Activity Unguided",
                    component: importComponent("TodoList/ActivityUnguided"),
                },
            ],
        },
    ],
});
export default router;