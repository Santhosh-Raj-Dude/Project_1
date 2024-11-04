import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private bikes = [
    {
      id: 'yamaha-mt-15',
      name: 'Yamaha MT 15 V2.0',
      price: 'Rs. 2 - 2.05 Lakh*',
      mileage: '56.87 kmpl',
      engine: '155 cc',
      rating: '4.4',
      description: 'A powerful and agile bike perfect for city rides.',
      imageUrl: "app/assets/images/Yamaha.png", // Ensure the image path is correct
    },
    {
      id: 'royal-enfield-classic-350',
      name: 'Royal Enfield Classic 350',
      price: 'Rs. 1.93 - 2.25 Lakh*',
      mileage: '37 kmpl',
      engine: '349 cc',
      rating: '4.5',
      description: 'Classic styling meets modern technology in this iconic bike.',
      imageUrl: 'app/assets/images/Royal.png',
    },
    {
      id: 'honda-sp-125',
      name: 'Honda SP 125',
      price: 'Rs. 86,474 - 90,467*',
      mileage: '65 kmpl',
      engine: '124 cc',
      rating: '4.3',
      description: 'A perfect blend of style and performance for daily commutes.',
      imageUrl: 'app/assets/images/Honda.png',
    },
    {
      id: 'hero-splendor-plus',
      name: 'Hero Splendor Plus',
      price: 'Rs. 76,306 - 77,586*',
      mileage: '70 kmpl',
      engine: '97.2 cc',
      rating: '4.2',
      description: 'A reliable bike known for its fuel efficiency and durability.',
      imageUrl: 'app/assets/images/Hero.png',
    },
    {
      id: 'suzuki-gixxer',
      name: 'Suzuki Gixxer',
      price: 'Rs. 1.23 - 1.33 Lakh*',
      mileage: '50 kmpl',
      engine: '155 cc',
      rating: '4.5',
      description: 'Sporty design with an impressive performance.',
      imageUrl: 'app/assets/images/Suziki.png',
    },
    {
      id: 'ktm-rc-200',
      name: 'KTM RC 200',
      price: 'Rs. 2.12 - 2.22 Lakh*',
      mileage: '35 kmpl',
      engine: '199.5 cc',
      rating: '4.6',
      description: 'A true racer designed for the thrill of riding.',
      imageUrl: 'app/assets/images/Ktm.png',
    },
    {
      id: 'kawasaki-ninja-300',
      name: 'Kawasaki Ninja 300',
      price: 'Rs. 3.23 - 3.60 Lakh*',
      mileage: '30 kmpl',
      engine: '296 cc',
      rating: '4.7',
      description: 'A powerful bike designed for performance and speed.',
      imageUrl: 'app/assets/images/Kawasaki.png',
    },
    {
      id: 'bajaj-pulsar-220f',
      name: 'Bajaj Pulsar 220F',
      price: 'Rs. 1.42 - 1.48 Lakh*',
      mileage: '40 kmpl',
      engine: '220 cc',
      rating: '4.3',
      description: 'Combines style, performance, and comfort for a smooth ride.',
      imageUrl: 'app/assets/images/Pulsar.png',
    },
    {
      id: 'tvS-apache-rr-310',
      name: 'TVS Apache RR 310',
      price: 'Rs. 2.60 - 2.70 Lakh*',
      mileage: '30 kmpl',
      engine: '312 cc',
      rating: '4.5',
      description: 'A performance bike with superior handling and technology.',
      imageUrl: 'app/assets/images/Apache.png',
    },
    {
      id: 'honda-cb350',
      name: 'Honda CB350',
      price: 'Rs. 1.94 - 2.06 Lakh*',
      mileage: '45 kmpl',
      engine: '348 cc',
      rating: '4.4',
      description: 'Blends classic design with modern features.',
      imageUrl: 'app/assets/images/Hondacb350.png',
    },
    {
      id: 'benelli-502c',
      name: 'Benelli 502C',
      price: 'Rs. 4.99 - 5.20 Lakh*',
      mileage: '20 kmpl',
      engine: '500 cc',
      rating: '4.6',
      description: 'A stylish cruiser that stands out on the road.',
      imageUrl: 'app/assets/images/Benelli.png',
    }
  ];

  getBikes(): Observable<any[]> {
    return of(this.bikes); // Return an Observable of the bikes array
  }

  getBikeById(id: string): Observable<any> {
    const bike = this.bikes.find(bike => bike.id === id);
    return of(bike); // Return an Observable of the bike found
  }


  updateBike(id: string, updatedBike: any): void {
    const index = this.bikes.findIndex(bike => bike.id === id);
    if (index > -1) {
      this.bikes[index] = { ...this.bikes[index], ...updatedBike }; // Merge updated data
    }
  }

  deleteBike(index: number): void {
    this.bikes.splice(index, 1);
  }
}





/*
  First create the one folder ex:api and one more folder in that ..create a .json file  and create a one service 
  movie-service-obs.service.ts 

  export class movieserviceobs{
  private movieurl = ' api/movies/movies.json';
  //dependency injection
  constructor(private http:HttpClient){}
   getMovies():observable<IMovie[]>{
   return this.http.get<IMovie[]>(this.movieurl)
   .pipe(tap(data=>console.log('All ',JSON.stringify(data))),  
     
   //Connect the input and output - pipe (Reactive javascript library)
   catchError(this.handleError)
);   
   }








  }
*/