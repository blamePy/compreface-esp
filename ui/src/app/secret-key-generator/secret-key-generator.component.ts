import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-secret-key-generator',
  templateUrl: './secret-key-generator.component.html',
  styleUrls: ['./secret-key-generator.component.scss'],
})
export class SecretKeyGeneratorComponent {
  randomString = '';

  constructor() { }

  generateRandomString(): void {
    const randomUUID = uuidv4().replace(/-/g, '');
    //return randomUUID;
    this.randomString = randomUUID;
  }

  copyToClipboard(value: string): void {
    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }
}
