import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})

/**
 * Composant de gestion des formations permettant l'affichage et l'ajout dans le panier de formation
 */
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  error : any;
  constructor(private cartService : CartService, private router : Router, private apiService : ApiService) {
   }

  ngOnInit(): void {
    // this.listTrainings = [
    //   {id:1,name:'Java',description:'Formation Java SE 8 sur 5 jours',price:1500,quantity:1 },
    //   {id:2,name:'DotNet',description:'Formation DotNet 3 jours',price:1000,quantity:1 },
    //   {id:3,name:'Python',description:'Formation Python/Django 5 jours',price:1500,quantity:1 }
    // ];
    this.getAllTrainings();
  }

  /**
   * Méthode permettant l'ajout d'une formation au panier en utilisant le service dédié
   * @param training
   */
  onAddToCart(training:Training){
    if(training.quantity > 0) {
     this.cartService.addTraining(training);
     this.router.navigateByUrl('cart');
    }
  }
  getAllTrainings() {
    this.apiService.getTrainings().subscribe({
      next : (data) => this.listTrainings = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
      })
    }
}
