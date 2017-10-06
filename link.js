var link = function(files) {
  this.files = files;
  this.css = "<LINK rel=\"stylesheet\" type=\"text/css\" href=\"tag.css\">"
  this.result = "";


  this.getHtml = function() {
    var html = "<html><head>";
    html += this.css;
    html += "</head><body><H1>Welcome</H1>";
    html += this.getLink();
    html += "</body>";
    return html;
  }

  this.getLink = function() {
    for(var i=0;i<this.files.length;i++){
      var value = this.files[i];
      this.result += this.setLink(value);
    }
    return "<ul>" + this.result + "</ul>";
  }

  this.setLink = function(address) {
    let result = ""
    result += "<li><a href=\"" + address + "\">"
    result += address.slice(0,address.indexOf("."));
    result += "</a></li>";
    return result;
  }

}
module.exports = link;
