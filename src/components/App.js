import React, { Component } from 'react';
import { Alert, Picker } from 'react-native';
import { Container, Btn, BtnText, ColorPicker, ResistorPicker } from './styles';
import { colors as options } from '../colors';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectOne: options[0],
      selectTwo: options[0],
      selectThree: options[0],
      selectFour: options[0],
      selectFive: options[0],
      resistor: '3'
    };
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  selectColor(ColorPicker, option) {
    option = options.filter(item => item.id === option)[0];
    switch (ColorPicker) {
      case 1:
        this.setState({ selectOne: option });
        break;
      case 2:
        this.setState({ selectTwo: option });
        break;
      case 3:
        this.setState({ selectThree: option });
        break;
      case 4:
        this.setState({ selectFour: option });
        break;
      case 5:
        this.setState({ selectFive: option });
        break;
    }
  }

  selectResistor(option) {
    this.setState({ resistor: option });
  }

  search() {
    let res = this.state.selectOne.value + '' + this.state.selectTwo.value;

    if (this.state.resistor == '4') {
      res = res + '' + this.state.selectThree.value;
    }
    res =
      parseInt(res) *
      (this.state.resistor == '3'
        ? this.state.selectThree.multiplier
        : this.state.selectFour.multiplier);
    Alert.alert(
      'A resistência é:',
      `${res.toString()} OHMS com tolerância de ${this.state.selectFive.tolerance.toFixed(0)}%
    `
    );
  }

  render() {
    const fourOption = (
      <ColorPicker
        selectedState={this.state.selectFour}
        onValueChange={option => {
          this.selectColor(4, option);
        }}
        selectedValue={this.state.selectFour.id}
      >
        {options.map(color => (
          <Picker.Item label={color.name} value={color.id} key={color.id} />
        ))}
      </ColorPicker>
    );
    return (
      <Container>
        <ResistorPicker
          selectedValue={this.state.resistor}
          onValueChange={option => this.selectResistor(option)}
        >
          <Picker.Item label="3 Faixas" value="3" />
          <Picker.Item label="4 Faixas" value="4" />
        </ResistorPicker>
        <ColorPicker
          selectedState={this.state.selectOne}
          onValueChange={option => {
            this.selectColor(1, option);
          }}
          selectedValue={this.state.selectOne.id}
        >
          {options.map(color => (
            <Picker.Item label={color.name} value={color.id} key={color.id} />
          ))}
        </ColorPicker>
        <ColorPicker
          selectedState={this.state.selectTwo}
          onValueChange={option => {
            this.selectColor(2, option);
          }}
          selectedValue={this.state.selectTwo.id}
        >
          {options.map(color => (
            <Picker.Item label={color.name} value={color.id} key={color.id} />
          ))}
        </ColorPicker>
        <ColorPicker
          selectedState={this.state.selectThree}
          onValueChange={option => {
            this.selectColor(3, option);
          }}
          selectedValue={this.state.selectThree.id}
        >
          {options.map(color => (
            <Picker.Item label={color.name} value={color.id} key={color.id} />
          ))}
        </ColorPicker>
        {this.state.resistor == '4' ? fourOption : null}
        <ColorPicker
          selectedState={this.state.selectFive}
          onValueChange={option => {
            this.selectColor(5, option);
          }}
          selectedValue={this.state.selectFive.id}
        >
          {options.map(color => (
            <Picker.Item label={color.name} value={color.id} key={color.id} />
          ))}
        </ColorPicker>
        <Btn
          onPress={() => {
            this.search();
          }}
        >
          <BtnText>Pesquisar</BtnText>
        </Btn>
      </Container>
    );
  }
}
