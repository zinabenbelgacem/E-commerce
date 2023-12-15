import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-createCat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCatComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  display = 'none';
  categories: Categories = new Categories();

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    // Vous pouvez initialiser des données ou effectuer d'autres opérations lors de l'initialisation du composant ici.
  }

  ajoutCategorie = () => {
    this.categoriesService.create(this.categories).subscribe(
      (data) => {
        console.log(data);
        this.closeModal();
        // Réinitialisez la liste des catégories ici si nécessaire.
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openModal() {
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }
}
