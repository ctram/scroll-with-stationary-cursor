// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable1 = vscode.commands.registerCommand('extension.awesomeScrollUp', function () {
    vscode.commands.executeCommand("cursorUp");
        vscode.commands.executeCommand("scrollLineUp");
    });
    let disposable2 = vscode.commands.registerCommand('extension.awesomeScrollDown', function () {
    vscode.commands.executeCommand("cursorDown");
        vscode.commands.executeCommand("scrollLineDown");
    });

    context.subscriptions.push(disposable1);
    context.subscriptions.push(disposable2);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;