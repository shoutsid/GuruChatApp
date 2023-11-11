import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';
import Video from 'react-native-video';
const {width, height} = Dimensions.get('window');
export default class BackgroundVideo extends Component {
  render() {
    return (
      <View>
        <Video
          source={require('./intro.mp4')}
          style={styles.backgroundVideo}
          muted={false}
          repeat={false}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        <Wrapper>
          <Logo
            source={require('./../assets/cadence-logo.png')}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Title>Join Live And on-demand classes</Title>
          <TextDescription>
            With world-class instructions right here, right now
          </TextDescription>
          <ButtonWrapper>
            <Fragment>
              <Button
                title="Create Account"
                onPress={undefined}
                color={undefined}
              />
              <Button
                transparent
                title="Login"
                onPress={undefined}
                color={undefined}
              />
            </Fragment>
          </ButtonWrapper>
        </Wrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

// styled-component

export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;
export const Logo = styled.Image`
  max-width: 100px;
  width: 100px;
  height: 100px;
`;
export const TextDescription = styled.Text`
  letter-spacing: 3;
  color: #f4f4f4;
  text-align: center;
  text-transform: uppercase;
`;
export const ButtonWrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
export const Title = styled.Text`
  color: #f4f4f4;
  margin: 50% 0px 20px;
  font-size: 30;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3;
`;
const StyledButton = styled.TouchableHighlight`
 width:250px;
 background-color:${props => (props.transparent ? 'transparent' : '#f3f8ff')};
 padding:15px;
border:${props => (props.transparent ? '1px solid #f3f8ff ' : 0)}
 justify-content:center;
 margin-bottom:20px;
 border-radius:24px
`;
const StyledTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3;
  color: ${props => (props.transparent ? '#f3f8ff ' : '#666')};
`;

export const Button = ({onPress, color, ...props}) => {
  return (
    <StyledButton {...props}>
      <StyledTitle {...props}>{props.title}</StyledTitle>
    </StyledButton>
  );
};
