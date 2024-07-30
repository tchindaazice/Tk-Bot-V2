const axios = require('axios'); 
const request = require('request'); 
const fs = require("fs"); 
 module.exports = { 
         config: { 
                 name: "box", 
                 aliases: ["box"], 
                 version: "1.0", 
                 author: "MILAN", 
                 countDown: 5, 
                 role: 1, 
                 shortDescription: "set admin/change group photo,emoji,name", 
                 longDescription: "", 
                 category: "admin", 
                 guide:  { 
                         vi: "{pn} [admin,emoji,image,name]", 
                         en: "{pn} name <name> to change box mame\n{pn} emoji <emoji> to change box emoji\n{pn} image <reply to image> to chnge box image\n{pn} add [@tag] to add group admin \n{pn} del [@tag]  to remove group admin \n{pn} info to see group info" 
                 } 
         }, 
         onStart: async function ({ message, api, event, args, getText }) { 
         const axios = require('axios'); 
         const request = require('request'); 
         const fs = require("fs"); 
          if (args.length == 0) return api.sendMessage(`You can use:\n?box emoji [icon]\n\n?box name [box name to change]\n\n?box image [rep any image that needs to be set as box image]\n\n? box admin [tag] => it will give qtv to the person tagged\n\n?box info => All information of the group ! 
           
