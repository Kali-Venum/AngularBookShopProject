import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components.
import { BooksComponent } from './Components/books/books.component';
import { CartComponent } from './Components/cart/cart.component';

// Routes.
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
