import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-locationinfo';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    housingLocationList: HousingLocationInfo[] = [];

    filteredLocationList: HousingLocationInfo[] = [];

    housingService: HousingService = inject(HousingService);

    // Injecting HousingService into the Component
    constructor(){
    //setting housingLocationlist to the data array in HousingService
      this.housingLocationList = this.housingService.getAllHousingLocations();
      this.filteredLocationList = this.housingLocationList;
    }
    filterResults(text: string) {
      if (!text) {
        this.filteredLocationList = this.housingLocationList;
        return;
      }
      this.filteredLocationList = this.housingLocationList.filter((HousingLocation) => 
        HousingLocation?.city.toLowerCase().includes(text.toLowerCase()),
      );
    }
  
}
