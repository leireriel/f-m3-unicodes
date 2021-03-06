import React from 'react';
import PropTypes from 'prop-types';

class IconsHome extends React.Component{
  render() {
    const {design, fill, share} = this.props;
    return(
      <ul className="home__list">
        <li className="home__list-item">
          <i className="home__list-image far fa-object-ungroup" />
          <p className="home__list-text">{design}</p>
        </li>
        <li className="home__list-item">
          <i className="home__list-image far fa-keyboard" />
          <p className="home__list-text">{fill}</p>
        </li>
        <li className="home__list-item">
          <i className="home__list-image fas fa-share-alt" />
          <p className="home__list-text">{share}</p>
        </li>
      </ul>
    );
  }
}

IconsHome.propTypes={
  design: PropTypes.string,
  fill: PropTypes.string,
  share: PropTypes.string
}

export default IconsHome;
