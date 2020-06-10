import { Injectable } from '@angular/core';

export interface Category {
  title: string,
  text: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  service : Category[] = [
    {title: 'Massage Therapy', text: 'Living winged said you darkness you are divide gathered and bring one seasons face great dr Waters firmament place which.', id: 1},
    {title: 'Beauty Care', text: 'Living winged said you darkness you are divide gathered and bring one seasons face great dr Waters firmament place which.', id: 2},
    {title: 'Executive Reflexology', text: 'Living winged said you darkness you are divide gathered and bring one seasons face great dr Waters firmament place which.', id: 3}
  ];

  getById(id: number){
    return this.service.find(p => p.id === id)
  }
  constructor() { }
}
