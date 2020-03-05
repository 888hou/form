import Vue from "vue";
import VueRouter from "vue-router";

const Form = () => import(/* webpackChunkName: "create" */ '../views/create/Form');
const Question = () => import(/* webpackChunkName: "create" */ '../views/create/Question');
const Exam = () => import(/* webpackChunkName: "create" */ '../views/create/Exam');
const Vote = () => import(/* webpackChunkName: "create" */ '../views/create/Vote');
const MyQuestion = () => import(/* webpackChunkName: "create" */ '../views/mine/MyQuestion');
// const Recovery = () => import(/* webpackChunkName: "create" */ '../views/mine/Recovery');
// const Released = () => import(/* webpackChunkName: "create" */ '../views/mine/Released');


import Create from "@/layout/Create";

Vue.use(VueRouter);

const mainHome = new VueRouter({
  routes: [
    {
      path: "/",
      component: Create,
      children: [
        { path: '/form', component: Form },
        { path: '/question', component: Question },
        { path: '/exam', component: Exam },
        { path: '/vote', component: Vote },
        { path: '/my_question', component: MyQuestion }
        // { path: '/released', component: Released },
        // { path: '/recovery', component: Recovery }
      ]
    }
  ]
});

export default mainHome;
