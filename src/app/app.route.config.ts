import { AnalysisComponent } from './analysis/analysis.component';
import { ConverterComponent } from './converter/converter.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'converter', component: ConverterComponent
  },
  {
    path: 'analysis', component: AnalysisComponent
  },
  {
    path: '', redirectTo: 'converter', pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
