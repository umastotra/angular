import { Component } from '@angular/core';

@Component({
    selector: 'product-comp',
    templateUrl: './product.component.html'
})
export class ProductComponent { 
    show: boolean = true;
    products: any[] = [
      {
        "Name": "laptop",
        "Code": "1234",
        "Date": "COLA",
        "Price": "1.25",
        "StarRating": "2",
        "ImagePath": "https://picsum.photos/200/300?image=0"

      },
      {
        "Name": "pineapple",
        "Code": "4567",
        "Date": "COLA",
        "Price": "1.25",
        "StarRating": "3",
        "ImagePath": "https://picsum.photos/200/300/?image=824"

      },
      {
        "Name": "strawberry",
        "Code": "7685",
        "Date": "COLA",
        "Price": "1.25",
        "StarRating": "5",
        "ImagePath": "https://picsum.photos/200/300?image=1080"
      },

    ];
}

