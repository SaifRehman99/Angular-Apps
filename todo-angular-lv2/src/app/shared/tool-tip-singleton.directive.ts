import { Directive, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {


  // we applied on the parent of tool tip instances
  // we are getting the array of the tool tip instance of emlement so that we can get the array here


  // this contentchildren decorator is basically used to get the parent of the instances  
  @ContentChildren(ToolTipDirective, { descendants: true })

  // this is element name "which is "elementsWithTooltips" of type QueryList
  elementsWithTooltips: QueryList<ToolTipDirective>

  singletonInstance: any;
  
  constructor() { }

  ngAfterViewInit() {
   this.singletonInstance = createSingleton(this.getTippyInstances(), {

     // this is basically entry delay and exit delay in array
      delay: [200, 0],
      moveTransition: 'transform 0.2s ease-out'
    })

    // listening for the changes so that we can also get the updated changes on the instances
    this.elementsWithTooltips.changes.subscribe(() => {
      this.singletonInstance.setInstances(this.getTippyInstances())
    })
  }

  getTippyInstances() {
    return this.elementsWithTooltips
      .toArray()
      .map(t => t.tippyInstance)
  }
  
}
