const vscode = require('vscode');

function activate(context) {
    const disposableScrollWithCursorUp = vscode.commands.registerCommand('extension.scrollWithCursorUp', function () {
        vscode.commands.executeCommand("cursorUp");
        vscode.commands.executeCommand("scrollLineUp");
    });
    const disposableScrollWithCursorDown = vscode.commands.registerCommand('extension.scrollWithCursorDown', function () {
        vscode.commands.executeCommand("cursorDown");
        vscode.commands.executeCommand("scrollLineDown");
    });
    context.subscriptions = [disposableScrollWithCursorUp, disposableScrollWithCursorDown];
}

exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;