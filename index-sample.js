/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class CoastGARd extends Component {
  constructor(props){
    super(props);


    this.state = {
      supervision: 2,
      planning: 2,
      teamSelection: 2,
      teamFitness: 2,
      environment: 2,
      complexity: 2
      }
    }

    total(){
      let {
        supervision,
        planning,
        teamSelection,
        teamFitness,
        environment,
        complexity} =
      this.state;
      return supervision + planning + teamSelection + teamFitness + environment + complexity
    }

    color(){
      let total = this.total()
      if (total <= 23) return 'Green'
      if (total <= 44) return 'Amber'
      return 'Red'
    }


    renderSlider(theText, theProperty) {
    return <View style={styles.slider}>
      <Text>{theText}: {this.state[theProperty]}</Text>
      <Slider
        value={this.state[theProperty]}
        minimumValue={1}
        maximumValue={10}
        step={1}
        onValueChange={newValue => this.setState({[theProperty]: newValue})}
      />
    </View>
  }

  render() {
    let color = this.color()
    return (
      <View style={{flex:1}}>
        <View style={[styles.header, styles[this.color().toLowerCase()]]}>
          <Text style={styles.headerText}>
            {this.total()} {color}
          </Text>
        </View>

        {this.renderSlider('Supervision','supervision')}
        {this.renderSlider('Planning','planning')}
        {this.renderSlider('Selection','teamSelection')}
        {this.renderSlider('Fitness','teamFitness')}
        {this.renderSlider('Environment','environment')}
        {this.renderSlider('Complexity','complexity')}


        <View style={styles.slider}>
          <Text>Supervision:{this.state.supervision}</Text>
          <Slider
            value={this.state.supervision}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={newValue => this.setState({supervision: newValue})}
            />
        </View>

        <View style={styles.slider}>
          <Text>Planning:{this.state.planning}</Text>
          <Slider
            value={this.state.planning}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={newValue => this.setState({planning: newValue})}
            />
        </View>

        <View style={styles.slider}>
          <Text>Selection:{this.state.teamSelection}</Text>
          <Slider
            value={this.state.teamSelection}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={newValue => this.setState({teamSelection: newValue})}
            />
        </View>

        <View style={styles.slider}>
          <Text>Fitness:{this.state.teamFitness}</Text>
          <Slider
            value={this.state.teamFitness}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={newValue => this.setState({teamFitness: newValue})}
            />
        </View>

        <View style={styles.slider}>
          <Text>Environment:{this.state.environment}</Text>
          <Slider
            value={this.state.environment}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={newValue => this.setState({environment: newValue})}
            />
        </View>

        <View style={styles.slider}>
          <Text>Complexity:{this.state.complexity}</Text>
          <Slider
            value={this.state.complexity}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={newValue => this.setState({complexity: newValue})}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    slider: {
      flex:2,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#CCC'
  },

    red: {
      backgroundColor:'red'
    },

    amber: {
      backgroundColor:'orange'
    },

    green: {
      backgroundColor: 'green'
    },

    header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerText: {
      fontSize: 20,
      color: '#FFF'

    },
});

AppRegistry.registerComponent('CoastGARd', () => CoastGARd);
