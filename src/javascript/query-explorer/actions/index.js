// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import * as auth from './auth';
import * as params from './params';
import * as query from './query';
import * as report from './report';
import * as select2Options from './select2-options';
import * as settings from './settings';


export default {
  ...auth,
  ...params,
  ...query,
  ...report,
  ...select2Options,
  ...settings
};
