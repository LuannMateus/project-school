import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { DonationInfoBox } from '../../components/DonationInfoBox';
import { DonationModal } from '../../components/DonationModal';
import { GoBack } from '../../components/GoBack';
import { DonationTouchable } from '../../components/Touchable';
import { Typography } from '../../components/Typography';
import * as Styled from './styles';

export type DonationProps = {
  image: ImageSourcePropType;
  title: string;
  daysRemaining: number;
  by: string;
  description: string;
  target: number;
  reached: number;
};

export const Donation = ({
  image,
  title,
  daysRemaining,
  by,
  description,
  target,
  reached,
}: DonationProps) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleDonationModalOpen = () => {
    setIsDonationModalOpen(true);
  };

  const handleDonationModalClose = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack />
      <Styled.MainImage source={image} />
      <Styled.DonationInfoContainer>
        <Styled.TitleAndTimeContainer>
          <Typography size="medium" weight="semiBold" paddingTop={2}>
            {title}
          </Typography>
          <Typography size="xsmall" weight="regular" paddingTop={2}>
            {daysRemaining} dias restantes
          </Typography>
        </Styled.TitleAndTimeContainer>

        <Styled.ByContainer>
          <Typography size="xsmall" color="primaryColor75">
            Por
          </Typography>
          <Typography size="xsmall" weight="bold">
            {by}
          </Typography>
        </Styled.ByContainer>

        <Typography size="xsmall" paddingTop={2} color="primaryColor75">
          {description}
        </Typography>
      </Styled.DonationInfoContainer>
      <Styled.TargetAndDonationMoneyContainer>
        <DonationInfoBox targetValue={target} type="target" />
        <DonationInfoBox reachedValue={reached} type="money" />
      </Styled.TargetAndDonationMoneyContainer>
      <Styled.DonationButtonContainer>
        <DonationTouchable
          title="Doar Agora"
          onPress={() => handleDonationModalOpen()}
        />
      </Styled.DonationButtonContainer>
      <DonationModal
        isOpen={isDonationModalOpen}
        closeModal={handleDonationModalClose}
      />
    </Styled.Wrapper>
  );
};