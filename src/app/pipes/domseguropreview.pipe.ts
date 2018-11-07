import { Pipe, PipeTransform } from '@angular/core';
//se importa el domsanitizer para asegurarse de que es seguro
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'domseguropreview'
})
export class DomseguroPreviewPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  transform(value: string): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
