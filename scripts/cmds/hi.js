module.exports = {
    config: {
        name: "hi",
        version: "1.0",
        author: "TK joel",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hi") return message.reply("ℎ𝑒𝑙𝑙𝑜 𝐵𝑟𝑜, ℎ𝑜𝑤 𝑐𝑎𝑛 𝑖 ℎ𝑒𝑙𝑝 𝑦𝑜𝑢? 𝑇𝑦𝑝𝑒 @trollgc ✨ 𝑡𝑜 𝑗𝑜𝑖𝑛 𝑚𝑦 𝑠𝑢𝑝𝑝𝑜𝑟𝑡𝑔𝑐🤲🚀🥺");
}
};
