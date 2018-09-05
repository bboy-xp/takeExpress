import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/view/Form/Form';
import SuccessNorth from '@/view/SuccessNorth/SuccessNorth';
import SuccessSouth from '@/view/SuccessSouth/SuccessSouth';
import Submission from '@/view/Admin/Submission/Submission';
import Taken from '@/view/Admin/Taken/Taken';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },{
      path: '/successNorth',
      name: 'SuccessNorth',
      component: SuccessNorth
    },{
      path: '/successSouth',
      name: 'SuccessSouth',
      component: SuccessSouth
    },{
      path: '/admin/submission',
      name: 'Submission',
      component: Submission
    },{
      path: '/admin/taken',
      name: 'Taken',
      component: Taken
    },
  ]
})
