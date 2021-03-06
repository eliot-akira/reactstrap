/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import NavsExample from '../examples/Navs';
const NavsExampleSource = require('!!raw!../examples/Navs');
import NavVerticalExample from '../examples/NavVertical';
const NavVerticalExampleSource = require('!!raw!../examples/NavVertical');
import NavTabsExample from '../examples/NavTabs';
const NavTabsExampleSource = require('!!raw!../examples/NavTabs');
import NavPillsExample from '../examples/NavPills';
const NavPillsExampleSource = require('!!raw!../examples/NavPills');

export default class NavssPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Nav Components" />
        <h3>Navs</h3>
        <div className="docs-example">
          <NavsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavsExampleSource}
          </PrismCode>
        </pre>
        <h4>Nav Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.bool,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavItem Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavLink Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavDropdown Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavDropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func
};`}
          </PrismCode>
        </pre>
        <h3>Vertical</h3>
        <div className="docs-example">
          <NavVerticalExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavVerticalExampleSource}
          </PrismCode>
        </pre>
        <h3>Tabs</h3>
        <div className="docs-example">
          <NavTabsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavTabsExampleSource}
          </PrismCode>
        </pre>
        <h3>Pills</h3>
        <div className="docs-example">
          <NavPillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavPillsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
