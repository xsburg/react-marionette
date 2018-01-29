import * as React from 'react';
import { MarionetteComponent, ReactBehavior, ReactView } from '../../src/index';

const view = new ReactView({
    render: () => {
        return <div>Hello, React!</div>;
    }
});

const component = (
    <MarionetteComponent
        view={ReactView}
        viewOptions={{
            className: 'react-view'
        }}
        onUpdateOptions={view => false}
    />
);
