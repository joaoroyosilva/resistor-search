import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#3498db'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  flex-direction: column;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Btn = styled.TouchableOpacity`
  background-color: #d35400;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-top: 10;
  border-radius: 0px;
`;

export const BtnText = styled.Text`
  padding: 10px;
  color: #fff;
  font-size: 25;
`;

export const ColorPicker = styled.Picker`
  height: 40;
  width: 80%;
  margin-top: 10;
  background-color: ${props => props.selectedState.rgb};
  color: ${props => props.selectedState.rgb};
`;

export const ResistorPicker = styled.Picker`
  height: 40;
  width: 80%;
  margin-top: 10;
  background-color: #fff;
`;
