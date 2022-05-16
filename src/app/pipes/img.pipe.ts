import { environment } from '../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
const URL_IMG = environment.BASE_URL_IMG;
@Pipe({
  name: 'img',
})
export class ImgPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value) {
      return URL_IMG + value;
    } else {
      return 'https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg';
    }
  }
}
