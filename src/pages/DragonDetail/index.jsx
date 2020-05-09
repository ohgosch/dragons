import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { getDragonDetail } from 'logic/requests/dragon';
import { Wrapper } from 'visual/styles/Wrapper';
import { format } from 'logic/date';

import { ButtonFixed } from 'components/ButtonFixed';
import { Loader } from 'components/Loader';
import { ROUTES } from 'logic/constants';
import { TEXTS } from 'logic/texts';
import {
  Container,
  Content,
  Title,
  Type,
  InfoWrapper,
  InfoTitle,
  InfoValue,
  LoaderWrapper,
} from './styles';

export const DragonDetail = () => {
  const [dragon, setDragon] = useState({});
  const [loading, setLoading] = useState(true);
  const { name, type, history, createdAt } = dragon;
  const { id } = useParams();

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data } = await getDragonDetail(id);
    setDragon(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Wrapper>
        <ButtonFixed to={ROUTES.DRAGON_EDIT.replace(':id', id)}>
          {TEXTS.detail.edit}
        </ButtonFixed>
        <Content loading={loading}>
          {!loading && (
            <>
              <Title>{name}</Title>
              <Type title={TEXTS.detail.type}>{type}</Type>
              {!!createdAt && (
                <InfoWrapper>
                  <InfoTitle>{TEXTS.detail.createdAt}</InfoTitle>
                  <InfoValue>{format(createdAt)}</InfoValue>
                </InfoWrapper>
              )}
              {!!history && !!history.length && (
                <InfoWrapper>
                  <InfoTitle>{TEXTS.detail.history}</InfoTitle>
                  <InfoValue>{history}</InfoValue>
                </InfoWrapper>
              )}
            </>
          )}
          {loading && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default DragonDetail;
