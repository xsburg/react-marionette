import React from 'react';
import Marionette from 'backbone.marionette';

interface OwnProps {
    view: typeof Marionette.View;
    viewOptions: any;
    onUpdateOptions?: (view: Marionette.View<any>) => boolean;
}

export class MarionetteComponent extends React.Component<OwnProps> {
}

export class ReactBehavior extends Marionette.Behavior {
}

export class ReactView extends Marionette.View {
}
