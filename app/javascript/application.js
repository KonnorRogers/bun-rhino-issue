// Entry point for the build script in your package.json
// Broken with Bun, causes recursion issue.
// import "@hotwired/turbo-rails"
import "./controllers"

// Rhino Editor
import "rhino-editor/exports/index.js"
import "rhino-editor/exports/styles/trix.css"

// Prose Mirror
// import {EditorState} from "prosemirror-state"
// import {EditorView} from "prosemirror-view"
// import {Schema, DOMParser} from "prosemirror-model"
// import {schema} from "prosemirror-schema-basic"
// import {addListNodes} from "prosemirror-schema-list"
// import {exampleSetup} from "prosemirror-example-setup"
//
// // Mix the nodes from prosemirror-schema-list into the basic schema to
// // create a schema with list support.
// const mySchema = new Schema({
//   nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
//   marks: schema.spec.marks
// })
//
// window.view = new EditorView(document.querySelector("#editor"), {
//   state: EditorState.create({
//     doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
//     plugins: exampleSetup({schema: mySchema})
//   })
// })
//

// TipTap
// import { Editor } from '@tiptap/core'
// import StarterKit from '@tiptap/starter-kit'
//
// new Editor({
//   element: document.querySelector('#editor'),
//   extensions: [
//     StarterKit,
//   ],
//   content: '<p>Hello World!</p>',
// })

// import "trix"
// import "@rails/actiontext"
