import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import { PureComponent } from 'react';

import 'antd/dist/antd.css';

/** @namespace StyleguideExtension/Component/StyleguidePage/StyleGuide/Component/StyleGuideComponent */
export class StyleGuideComponent extends PureComponent {
    typeMap = {};

    render() {
        return (
            <>
                <Button type="primary">Button</Button>

                <Input placeholder="Basic usage" />

                <Card title="Default size card" extra={ <a href="#">More</a> } style={ { width: 300 } }>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
            </>
        );
    }
}

export default StyleGuideComponent;
