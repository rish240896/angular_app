import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users()
  {
    return [
      {
        name: 'Rishabh',
        city: 'Lucknow',
        age: '26'
      },
      {
        name: 'Vikas',
        city: 'Etawah',
        age: '26'
      },
      {
        name: 'Akash',
        city: 'Allahabas',
        age: '25'
      },
      {
        name: 'Bhavish',
        city: 'Ghaziabad',
        age: '29'
      },
      {
        name: 'Satendra',
        city: 'Etah',
        age: '35'
      }
     ]
  }
}
