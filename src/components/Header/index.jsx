import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { Wrapper } from 'visual/styles/Wrapper';
import { ROUTES } from 'logic/constants';
import { TEXTS } from 'logic/texts';
import { AuthContext } from 'contexts/AuthContext';

import logo from 'assets/img/logoWhite.svg';
import { Container, Logo, User, Content } from './styles';

const RenderLogo = ({ isAuthRoute }) =>
  isAuthRoute ? (
    <Logo src={logo} alt={TEXTS.header.logoAlt} />
  ) : (
    <Link to={ROUTES.MAIN} title={TEXTS.header.redirectToHome}>
      <Logo src={logo} alt={TEXTS.header.logoAlt} />
    </Link>
  );

RenderLogo.propTypes = {
  isAuthRoute: PropTypes.bool,
};

RenderLogo.defaultProps = {
  isAuthRoute: false,
};

export const Header = () => {
  const { pathname } = useLocation();
  const {
    profile: { name },
  } = useContext(AuthContext);
  const isAuthRoute = pathname === ROUTES.AUTH;

  return (
    <Container>
      <Wrapper>
        <Content>
          <RenderLogo isAuthRoute={isAuthRoute} />
          {!isAuthRoute && !!name && (
            <User to={ROUTES.LOGOUT} title={TEXTS.header.logout}>
              {name[0]}
            </User>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Header;
