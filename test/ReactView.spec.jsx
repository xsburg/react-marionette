import React from 'react';
import Marionette from 'backbone.marionette';
import { mount } from 'enzyme';
import { ReactView } from '../src/index';

describe('ReactView', () => {
    it('should render react component', () => {
        const regionManager = new Marionette.RegionManager();
        const region = regionManager.addRegion('hostRegion', {
            el: document.createElement('div')
        });
        const view = new ReactView({
            className: 'react-wrapper',
            render: () => <div className="react-component">Hello, React</div>
        });
        region.show(view);
        const html = view.el.outerHTML;

        expect(html).toMatchSnapshot();
    });

    it('should render react component on render', () => {
        const view = new ReactView({
            className: 'react-wrapper',
            render: () => <div className="react-component">Hello, React</div>,
            mountPoint: 'onRender'
        });
        view.render();
        const html = view.el.outerHTML;

        expect(html).toMatchSnapshot();
    });
});
