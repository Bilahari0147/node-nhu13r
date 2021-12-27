import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'darwin-box';
  public searchTerm: any ='';
  public items: any;

  constructor(private _http: HttpClient){
    this.getItems()
  }


  getItems(){
    this._http.get('https://pokeapi.co/api/v2/pokemon/?limit=151').pipe(debounceTime(300)).subscribe( items => {
      this.items = items
      console.log(this.items)
    })
  }
}
