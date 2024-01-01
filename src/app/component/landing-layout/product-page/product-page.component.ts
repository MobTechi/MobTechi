import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BRAND } from 'src/app/constants/helper-constants';
import { App } from 'src/app/model/app.model';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  public product: App;
  public productLineKey: string;
  public BRAND = BRAND;

  constructor(
    public router: Router,
    private firebaseService: FirebaseService
  ) { }

  async ngOnInit(): Promise<void> {
    this.product = await this.firebaseService.getAppByUrl(this.router.url);
  }
}
