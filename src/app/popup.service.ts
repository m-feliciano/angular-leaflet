import {Injectable} from '@angular/core';
import {Util} from "leaflet";
import formatNum = Util.formatNum;
import {formatNumber, getLocaleNumberFormat} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() {
  }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${data.name}</div>` +
      `<div>State: ${data.state}</div>` +
      `<div>Population: ${(data.population).toLocaleString("pt-BR")}</div>` +
      `<div><img src="${data.imgUrl}" style="width: 148px; margin-top: 10px" alt="${data.name} turism image"></div>`
  }
}
