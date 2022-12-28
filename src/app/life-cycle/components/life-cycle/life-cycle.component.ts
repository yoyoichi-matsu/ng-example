import { BehaviorSubject, Subject, tap } from 'rxjs';

import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck,
    OnChanges, OnDestroy, OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    DoCheck
{
  constructor(private route: ActivatedRoute, private router: Router) {}

  cycles: string[] = [];
  subjectCycles: string[] = [];
  cycle$: Subject<string> = new Subject<string>();
  path: string | null = null;
  id: string | null = null;

  ngOnChanges() {
    console.log('ngOnChanges');
    this.cycles.push('ngOnChanges');
    this.cycle$.next('ngOnChanges');
  }

  ngOnInit(): void {
    this.cycle$
      .pipe(tap((s) => console.log(`cycle$: ${s}`)))
      .subscribe((s) => this.subjectCycles.push(s));

    console.log('ngOnInit');
    this.cycles.push('ngOnInit');
    this.cycle$.next('ngOnInit');

    this.path = this.router.url;
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.cycles.push('ngDoCheck');
    this.cycle$.next('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.cycles.push('ngAfterContentInit');
    this.cycle$.next('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.cycles.push('ngAfterContentChecked');
    this.cycle$.next('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.cycles.push('ngAfterViewInit');
    this.cycle$.next('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    this.cycles.push('ngAfterViewChecked');
    this.cycle$.next('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.cycles.push('ngOnDestroy');
    this.cycle$.next('ngOnDestroy');
  }
}
