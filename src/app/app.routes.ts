import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
//  const routes: Routes = [];
export const routes: Routes = [
    {
        path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module')
            .then(m => m.DashboardModule),
            providers: [provideHttpClient()]
    },
    {
        path: 'chat', loadChildren: () => import('./features/chat/chat.module')
            .then(m => m.ChatModule)
    },
    {
        path: 'store', loadChildren: () => import('./features/store/store.module')
            .then(m => m.StoreModule)
    },
    {
        path: 'bank', loadChildren: () => import('./features/bank/bank.module')
            .then(m => m.BankModule)
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
