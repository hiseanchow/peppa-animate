let editorWrap = document.createElement('div');
let editor = document.createElement('pre')
editorWrap.id = "editor"
editorWrap.appendChild(editor)

module.exports = { editorWrap, editor };