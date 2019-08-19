// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "lazyreact" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('extension.lazyReact1', function () {
		// The code you place here will be executed every time your command is executed
		vscode.window.activeTextEditor.edit(editBuilder => {
let lazy1 = `
import React, {Component} from 'react';
import styles from './style.scss';

export default class ZSY extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount(){}

	render() {
		return(
			<div>
				
			</div>
		)
	}
}`;
			editBuilder.insert(new vscode.Position(0, 0), lazy1)
		})
	});
	let disposable2 = vscode.commands.registerCommand('extension.lazyReact2', function () {
		vscode.window.activeTextEditor.edit(editBuilder => {
let lazy2 = `
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {externalUserActions} from '../../../actions';
import styles from './style.scss';

class ZSY extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount(){}

	render() {
		return(
			<div>
				
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, action), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ZSY);
`;
			editBuilder.insert(new vscode.Position(0, 0), lazy2)
		})
	});

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
