import { Pipe, PipeTransform } from '@angular/core';
import { stat } from 'fs';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status == null;

    if(INVALID_STATUS)
      return 'Status unavailable or invalid';

    return status ? 'Ativo' : 'Inativo';
  }
}
