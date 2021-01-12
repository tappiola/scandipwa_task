/**
 * This is a plugin file for the Router component.
 * The namespace of Router component class is:
 * Router/Component/Router/Component/RouterComponent
 * it is located in @scandipwa/router extension in:
 * node_modules/@scandipwa/router/src/component/Router/Router.component.js
 *
 * Learn more about plugins in docs:
 * https://scandipwa.gitbook.io/create-scandipwa-app/extensions/application-plugins
 */

import { createElement } from 'react';

import StyleGuidePage from '../component/StyleguidePage';

const addStyleGuidePageRoute = (member) => {
    if (process.env.NODE_ENV !== 'development') {
        return member;
    }

    return [
        ...member,
        {
            position: 10,
            path: '/styleguide',
            render: (props) => createElement(StyleGuidePage, props)
        }
    ];
};

export default {
    'Router/Component/Router/Component/RouterComponent': {
        'member-property': {
            switchRoutesList: addStyleGuidePageRoute
        }
    }
};
