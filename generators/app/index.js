'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('generator-educate-platform') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Name of the component'
    }, {
      type: 'confirm',
      name: 'relay',
      message: 'Do you want to wrap your component in a container(Relay)?',
      default: false
    }, {
      type: 'input',
      name: 'location',
      message: 'Where do you want to place your component?',
      default: 'src/components/'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('MyComponent.js'),
      this.destinationPath(this.props.location + this.props.name + '/' + this.props.name + '.js'),
      {
        name: this.props.name,
        relay: this.props.relay
      }
    );

    this.fs.copyTpl(
      this.templatePath('MyComponent.css'),
      this.destinationPath(this.props.location + this.props.name + '/' + this.props.name + '.css')
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(this.props.location + this.props.name + '/' + 'package.json'),
      {name: this.props.name}
    );
  }
};
