import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { DemoComponent } from './demo/demo.component';

import './styles/styles.scss';

enableProdMode();

bootstrapApplication(DemoComponent);
