import Vue from 'vue';
import Router from 'vue-router';

// Inclure les components vers lesquels rediriger
import TableauBord from '@/components/TableauBord';
import Notes from '@/components/Notes';
import Modules from '@/components/Modules';
import AddModule from '@/components/AddModule';
import EditModule from '@/components/EditModule';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: 'Tableau de bord'
            }
        },
        {
            path: '/home',
            name: 'Tableau de bord',
            component: TableauBord,
            meta: {
                title: 'Tableau de bord'
            }
        },
        {
            path: '/notes',
            name: 'Notes',
            component: Notes,
            meta: {
                title: 'Gestion des notes'
            }
        },
        {
            path: '/modules',
            name: 'Modules',
            component: Modules,
            meta: {
                title: 'Gestion des modules'
            },
            children: [
                {
                    path: 'add',
                    name: 'Ajout de module',
                    component: AddModule,
                    meta: {
                        title: 'Ajout d\'un module'
                    }
                },
                {
                    path: ':id/edit',
                    name: 'Modification de module',
                    component: EditModule,
                    meta: {
                        title: 'Modification d\'un module'
                    }
                }
            ]
        }
    ]
});
