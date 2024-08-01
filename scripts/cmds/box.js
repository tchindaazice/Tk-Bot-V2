const axios = require('axios');
const request = require('request');
const fs = require("fs");

module.exports = {
  config: {
    name: "box",
    aliases: ["group"],
    version: "1.0",
    author: "MILAN",
    countDown: 5,
    role: 1,
    shortDescription: "set admin/change group photo,emoji,name",
    longDescription: "",
    category: "admin",
    guide: {
      vi: "{pn} [admin,emoji,image,name]",
      en: "{pn} name <name> to change box name\n{pn} emoji <emoji> to change box emoji\n{pn} image <reply to image> to change box image\n{pn} add [@tag] to add group admin \n{pn} del [@tag] to remove group admin \n{pn} info to see group info"
    }
  },
  onStart: async function ({ message, api, event, args, getText }) {
    if (args.length == 0) return api.sendMessage(`You can use:\n?box emoji [icon]\n\n?box name [box name to change]\n\n?box image [rep any image that needs to be set as box image]\n\n? box admin [tag] => it will give qtv to the person tagged\n\n?box info => All information of the group ! `, event.threadID, event.messageID);
    
    if (args[0] == "name") {
      var content = args.slice(1).join(" ");
      if (event.messageReply && event.messageReply.body) {
        content = event.messageReply.body;
      }
      api.setTitle(`${content}`, event.threadID);
    }
    
    if (args[0] == "emoji") {
      const name = args[1] || (event.messageReply && event.messageReply.body);
      api.changeThreadEmoji(name, event.threadID)
    }
    
    if (args[0] == "add") {
      if (Object.keys(event.mentions).length == 0) {
        api.changeAdminStatus(event.threadID, args.slice(1).join(" "), true);
      } else {
        for (var i = 0; i < Object.keys(event.mentions).length; i++) {
          api.changeAdminStatus(event.threadID, Object.keys(event.mentions)[i], true)
        }
      }
    }
  }
};
