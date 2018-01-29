import React from 'react';
import Marionette from 'backbone.marionette';
import { mount } from 'enzyme';
import { MarionetteComponent } from '../src/index';

const SimpleView = Marionette.ItemView.extend({
    template({ name }) {
        return `Hello, ${name}`;
    },
    templateHelpers() {
        return {
            name: this.options.name
        };
    },
    className: 'sample-view'
});

describe('MarionetteComponent', () => {
    it('should render simple marionette view', () => {
        const component = mount(
            <div className="react-block">
                <MarionetteComponent
                    className="marionette-wrapper"
                    view={SimpleView}
                    viewOptions={{
                        name: 'Marionette'
                    }}
                />
            </div>
        );
        const marionetteElementHtml = component.getDOMNode().getElementsByClassName('marionette-wrapper')[0].innerHTML;

        expect(component).toMatchSnapshot();
        expect(marionetteElementHtml).toMatchSnapshot();
    });
});
