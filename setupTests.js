/**
 * Developer: Stepan Burguchev
 * Copyright: 2015-present ApprovalMax
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF ApprovalMax
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* eslint-disable import/no-extraneous-dependencies */

import 'babel-polyfill';
import React from 'react';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import $ from 'jquery';
import * as enzyme from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';

Backbone.$ = $;
global.$ = $;
global.jQuery = $;

enzyme.configure({ adapter: new ReactAdapter() });
