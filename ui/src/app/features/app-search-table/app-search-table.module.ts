/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppSearchTableComponent } from './app-search-table.component';
import { MatButtonModule } from '@angular/material/button';
import { TruncateModule } from 'src/app/ui/truncate-pipe/truncate.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SecretKeyGeneratorComponent } from '../../secret-key-generator/secret-key-generator.component';

@NgModule({
  declarations: [AppSearchTableComponent, SecretKeyGeneratorComponent],
  exports: [AppSearchTableComponent],
  imports: [CommonModule, TranslateModule, MatIconModule, FormsModule, MatInputModule, MatButtonModule, TruncateModule, MatTooltipModule],
})
export class AppSearchTableModule {}
