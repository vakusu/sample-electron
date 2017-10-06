var menu = function(){


  this.getMenu = function(main) {
    var result = "";

    return templateMenu = [
      {
          label: 'Option',
          submenu: [
              {
                  label: 'Reload',
                  accelerator: 'CmdOrCtrl+R',
                  click(item, focusedWindow){
                      if(focusedWindow) focusedWindow.reload()
                  },
              },
              {
                  label: 'Back',
                  accelerator: 'CmdOrCtrl+B',
                  click(){main.loadURL("http://127.0.0.1:3000/");}
              },
          ]
      },
    ];
  }
}
module.exports = menu;
