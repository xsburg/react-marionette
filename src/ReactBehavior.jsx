/**
 * Developer: Stepan Burguchev
 * Date: 2/5/2017
 * Copyright: 2015-2017 ApprovalMax
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF ApprovalMax
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

import Marionette from 'backbone.marionette';
import React from 'react';
import ReactDOM from 'react-dom';

export default Marionette.Behavior.extend({
    initialize(options) {
        if (!options.containerEl) {
            throw new Error('Missing options: containerEl');
        }
        if (!options.containerEl) {
            throw new Error('Missing options: render');
        }
    },

    onShow() {
        ReactDOM.render(
            this.options.render(),
            this.__getContainerEl()
        );
    },

    onDestroy() {
        ReactDOM.unmountComponentAtNode(this.__getContainerEl());
    },

    __getContainerEl() {
        if (this.options.containerEl) {
            return this.$(this.options.containerEl)[0];
        }
        return this.el;
    }
});
