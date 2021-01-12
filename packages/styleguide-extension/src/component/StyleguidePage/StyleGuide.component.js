import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import Layout from 'antd/lib/layout';
import Typography from 'antd/lib/typography';
import { PureComponent } from 'react';

import 'antd/dist/antd.css';
import './StyleGuide.style.scss';

const { Header, Content } = Layout;
const { Title } = Typography;

/** @namespace StyleguideExtension/Component/StyleguidePage/StyleGuide/Component/StyleGuideComponent */
export class StyleGuideComponent extends PureComponent {
    typeMap = {};

    render() {
        return (
            <Layout className="StyleGuide">
                <Header>
                    <Title style={ { color: 'white', textAlign: 'center' } }>
                        Elements styleguide
                    </Title>
                </Header>
                <Content style={ { margin: '30px' } }>
                    <div>
                        <Button className="StyleGuide-Button" type="primary">Button</Button>
                        <Button className="StyleGuide-Button" type="secondary">Button</Button>
                        <Button className="StyleGuide-Button" type="dashed">Button</Button>
                        <Button className="StyleGuide-Button" type="link">Button</Button>
                        <Button shape="circle" icon={ <SearchOutlined /> } />
                    </div>
                    <div>
                        <Input className="StyleGuide-Input" placeholder="Basic usage" />
                        <Input className="StyleGuide-Input" placeholder="default size" prefix={ <UserOutlined /> } />
                        <Input
                          addonBefore="https://"
                          addonAfter=".com"
                          className="StyleGuide-Input"
                          placeholder="website"
                        />
                    </div>
                    <div className="StyleGuide-CardContainer">
                        <Card title="Default size card" extra={ <a href="#">More</a> } style={ { width: 300 } }>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card title="Default size card" extra={ <a href="#">More</a> } style={ { width: 300 } } loading>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default StyleGuideComponent;
