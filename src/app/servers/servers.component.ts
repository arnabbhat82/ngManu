import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  newItemStatus = false;
  newItemName = 'Inserted';
  servers = ['Test Server', 'Test Server 2']

  constructor() {

    setTimeout(()=> {
      this.allowNewServer = true;

    },2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  getNewItem(){
    this.newItemStatus = true;
  }


}
