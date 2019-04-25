import { Component } from '@angular/core';
import { NgxEditorModel, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  options = {
    theme: 'vs-dark',
    language: 'json'
  };
  code = ``;
  model: NgxEditorModel = {
    value : '{\n\t\n}',
    uri: 'modelB',
    language: 'json'
  };

  onInit(editor) {
    this.addconfig(editor);
  }

  addconfig(editor: any) {
      console.log((window as any).monaco);
      const uri = 'modelB';
      console.log(monaco.languages.json.jsonDefaults.diagnosticsOptions.schemas);
      monaco.languages.json.jsonDefaults.diagnosticsOptions.schemas.push({
          uri: 'http://myserver/foo-schema2.json',
          fileMatch: [uri.toString()],
          schema: {
            type: 'object',
            properties: {
              RowAlternationEnabled:
                  {
                  type: 'boolean'
                  },
                  GroupPanelVisible:
                  {
                  type: 'boolean'
                  },
                  GroupAutoExpandAll:
                  {
                  type: 'boolean'
                  }
            }
          }
      });
      console.log(monaco.languages.json.jsonDefaults.diagnosticsOptions.schemas);
    }
  }

