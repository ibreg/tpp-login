import { PipeTransform, Pipe } from '@angular/core';
import LoginResourcesGR from './login.resources';

@Pipe({ name: 'loginPipe' })
export class LoginPipe implements PipeTransform {

    transform(value: string, lang = Language.GR): string {
        if (lang === Language.GR) {
            const resources = new LoginResourcesGR();
            return resources[value] || '';
        } else if (lang === Language.EN) {
            // const resources = new LoginResourcesEN();
            // return resources[value] || '';
        }
    }
}

enum Language {
    GR,
    EN
}