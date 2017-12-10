const vscode = require('vscode');

function activate(context) {
    const scrollWithCursorUp = vscode.commands.registerCommand('extension.scrollWithCursorUp', function () {
        vscode.commands.executeCommand("cursorUp");
        vscode.commands.executeCommand("scrollLineUp");
    });
    const scrollWithCursoDown = vscode.commands.registerCommand('extension.scrollWithCursorDown', function () {
        vscode.commands.executeCommand("cursorDown");
        vscode.commands.executeCommand("scrollLineDown");
    });
    context.subscriptions = [scrollWithCursorUp, scrollWithCursoDown];
}

exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;