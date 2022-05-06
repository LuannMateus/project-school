import { StatusBar } from 'expo-status-bar';
import { BackButtonAndTitle } from '../../components/BackButtonAndTitle';
import { GoggleButton, LoginButton } from '../../components/Login/LoginButton';
import { LoginInput } from '../../components/Login/LoginInput';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Typography } from '../../components/Typography';

import * as Styled from './styles';

export const SignIn = () => {
  return (
    <SafeAreaContainer>
      <StatusBar style="auto" />
      <BackButtonAndTitle />
      <Styled.Main>
        <Styled.InputGroupContainer>
          <Styled.InputContainer>
            <LoginInput />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <LoginInput type="password" />
          </Styled.InputContainer>
        </Styled.InputGroupContainer>
        <Styled.ForgotPasswordContainer>
          <Typography size="xsmall" color="primaryColor75" weight="semiBold">
            Esqueceu a senha?
          </Typography>
        </Styled.ForgotPasswordContainer>
        <Styled.LoginTouchableContainer>
          <LoginButton>
            <Typography color="white" weight="semiBold">
              Entrar
            </Typography>
          </LoginButton>
        </Styled.LoginTouchableContainer>
        <Styled.OrContainer>
          <Typography weight="semiBold">OU</Typography>
        </Styled.OrContainer>
        <Styled.GoogleTouchableContainer>
          <GoggleButton />
        </Styled.GoogleTouchableContainer>
        <Styled.ToggleModeContainer>
          <Typography>Não possui uma conta? </Typography>
          <Styled.ToggleModeInput>
            <Typography color="primaryColor75" weight="semiBold">
              Criar Conta
            </Typography>
          </Styled.ToggleModeInput>
        </Styled.ToggleModeContainer>
      </Styled.Main>
    </SafeAreaContainer>
  );
};