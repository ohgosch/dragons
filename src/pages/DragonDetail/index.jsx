import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getDragonDetail } from 'logic/requests/dragon';
import { Wrapper } from 'visual/styles/Wrapper';
import { format } from 'logic/date';

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
  const { name, type, histories, createdAt } = dragon;
  const { id } = useParams();
  const historiesIsArray = typeof histories === 'object';

  const fetch = async () => {
    const { data } = await getDragonDetail(id);
    setDragon(data);
  };

  useEffect(() => {
    fetch();
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>{name}</Title>
          <Type title="Type">{type}</Type>
          {!!createdAt && (
            <InfoWrapper>
              <InfoTitle>Created at:</InfoTitle>
              <InfoValue>{format(createdAt)}</InfoValue>
            </InfoWrapper>
          )}
          {!!histories && !!histories.length && (
            <InfoWrapper>
              <InfoTitle>Histories:</InfoTitle>
              <InfoValue>
                {historiesIsArray ? histories[0] : histories}
              </InfoValue>
            </InfoWrapper>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default DragonDetail;
