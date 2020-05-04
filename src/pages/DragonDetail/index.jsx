import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { getDragonDetail } from 'logic/requests/dragon';
import { Wrapper } from 'visual/styles/Wrapper';
import { format } from 'logic/date';

import { ButtonFixed } from 'components/ButtonFixed';
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
} from './styles';

export const DragonDetail = () => {
  const [dragon, setDragon] = useState({});
  const { name, type, history, createdAt } = dragon;
  const { id } = useParams();

  const fetch = useCallback(async () => {
    const { data } = await getDragonDetail(id);
    setDragon(data);
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
        <Content>
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
        </Content>
      </Wrapper>
    </Container>
  );
};

export default DragonDetail;
