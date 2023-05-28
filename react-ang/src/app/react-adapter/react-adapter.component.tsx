
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterContentInit, Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { take } from 'rxjs';


@Component({
  selector: 'react-adapter',
  template: '',
  styles: [':host {height: 100%; overflow: auto;}'],
})
export class ReactAdapterComponent implements AfterContentInit {
  constructor(private hostRef: ElementRef, private route: ActivatedRoute) {}
 
  async ngAfterContentInit(): Promise<void> {
    this.route.data.pipe(take(1)).subscribe(async (data: Data) => {
      const component = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mf1',
        exposedModule: './Test',
      });
      console.log(component.default);
      
      const ReactMFEModule = component.default
      const hostElement = this.hostRef.nativeElement;
      ReactDOM.render(<ReactMFEModule/>, hostElement);
    });
  }
}
