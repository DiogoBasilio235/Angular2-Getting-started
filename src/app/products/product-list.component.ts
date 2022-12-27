import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy{
    //Injecting the service in the constructor
    constructor(private productService: ProductService) {}

    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage: string = '';
    // The banger sign tells us that Typescript will deal with assign a type to this variable later
    sub!: Subscription;
    
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter: ', value)
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts : IProduct[] = [];
    products: IProduct[] = [];

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = "Product List: " + message;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}