/**
▒█▀▀▀█ ░█▀▀█ ▒█▀▀▄ ▀█▀ ▒█░░▒█ ░█▀▀█ ░░ ▒█▀▄▀█ ▒█▀▀▄ 
░▀▀▀▄▄ ▒█▄▄█ ▒█░▒█ ▒█░ ▒█▄▄▄█ ▒█▄▄█ ▀▀ ▒█▒█▒█ ▒█░▒█ 
▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ▄█▄ ░░▒█░░ ▒█░▒█ ░░ ▒█░░▒█ ▒█▄▄▀

   * @project_name : SADIYA-MD
   * @authors : SADIYA-MD(sadiya) <https://github.com/Sadiya70/SADIYA-MD>
   * @youtube : https://www.youtube.com/@sadiyaofficial44
   * @description : SADIYA-MD ,A Multi-functional whatsapp user bot.
   * @version 1.5.0

   * Created By SADIYA OFC.
   * © 2024 SADIYA-MD.
*/

const _0x3c5270=_0x424c;function _0x424c(_0x221d49,_0x3aeb93){const _0x266c61=_0x266c();return _0x424c=function(_0x424c18,_0x3919c9){_0x424c18=_0x424c18-0xfb;let _0x5ed458=_0x266c61[_0x424c18];return _0x5ed458;},_0x424c(_0x221d49,_0x3aeb93);}function _0x266c(){const _0x4db3af=['1812450mwGRJG','🖼️','log','813948ULvdiV','media','45b94c5cef39940d1','@s.whatsapp.net','arraybuffer','axios','get','❌\x20*දෝෂයක්\x20ඇති\x20විය!\x20කරුණාකර\x20නැවත\x20උත්සාහ\x20කරන්න.*','AIzaSyDebFT-uY_f82_An6bnE9WvVcgVbzwDKgU','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🌟\x20*-------「\x20GHOST-MD\x20Image\x20','buffer','198vBzEzM','139092TktTtn','from','1hSynjD','../command','data','img','&key=','1580iKRUHk','25tgUBxU','items','&searchType=image&num=5','length','&cx=','890351IPIHge','1624kfDQqr','872dHZOCs','No\x20images\x20found\x20for\x20your\x20query.','https://www.googleapis.com/customsearch/v1?q=','link','762668UQsbyn'];_0x266c=function(){return _0x4db3af;};return _0x266c();}(function(_0x7f4a82,_0x5f0c9e){const _0x336944=_0x424c,_0x559400=_0x7f4a82();while(!![]){try{const _0x2abbe9=-parseInt(_0x336944(0x116))/0x1*(parseInt(_0x336944(0x104))/0x2)+parseInt(_0x336944(0x108))/0x3+parseInt(_0x336944(0x114))/0x4*(parseInt(_0x336944(0x11c))/0x5)+parseInt(_0x336944(0x105))/0x6+parseInt(_0x336944(0xff))/0x7*(-parseInt(_0x336944(0x100))/0x8)+-parseInt(_0x336944(0x113))/0x9*(parseInt(_0x336944(0x11b))/0xa)+-parseInt(_0x336944(0xfe))/0xb;if(_0x2abbe9===_0x5f0c9e)break;else _0x559400['push'](_0x559400['shift']());}catch(_0x5e69d3){_0x559400['push'](_0x559400['shift']());}}}(_0x266c,0x3e8d9));const {cmd}=require(_0x3c5270(0x117)),axios=require(_0x3c5270(0x10d)),{Buffer}=require(_0x3c5270(0x112)),GOOGLE_API_KEY=_0x3c5270(0x110),GOOGLE_CX=_0x3c5270(0x10a);cmd({'pattern':_0x3c5270(0x119),'desc':'Search\x20and\x20send\x20images\x20from\x20Google.','react':_0x3c5270(0x106),'category':_0x3c5270(0x109),'filename':__filename},async(_0x79d055,_0x37937b,_0x3e207a,{from:_0x67deb8,quoted:_0x3c32b0,body:_0xd0660e,isCmd:_0x3d1341,command:_0x147072,args:_0x246621,q:_0x34498f,isGroup:_0x5dd4a6,sender:_0x116680,senderNumber:_0x3228c3,botNumber2:_0x370078,botNumber:_0x105bec,pushname:_0x5e0dba,isMe:_0x43f401,isOwner:_0x5a8e6b,groupMetadata:_0x5f4bcc,groupName:_0x33265c,participants:_0x39efae,groupAdmins:_0x1dd0d2,isBotAdmins:_0x82821e,isAdmins:_0x4ee6d6,reply:_0x212fc8})=>{const _0x1ce4f6=_0x3c5270;try{if(!_0x34498f)return _0x212fc8('Please\x20provide\x20a\x20search\x20query\x20for\x20the\x20image.');const _0x812f98=encodeURIComponent(_0x34498f),_0x18d28d=_0x1ce4f6(0x102)+_0x812f98+_0x1ce4f6(0xfd)+GOOGLE_CX+_0x1ce4f6(0x11a)+GOOGLE_API_KEY+_0x1ce4f6(0xfb),_0x3ebefd=await axios[_0x1ce4f6(0x10e)](_0x18d28d),_0x5df5f4=_0x3ebefd[_0x1ce4f6(0x118)];if(!_0x5df5f4[_0x1ce4f6(0x11d)]||_0x5df5f4[_0x1ce4f6(0x11d)][_0x1ce4f6(0xfc)]===0x0)return _0x212fc8(_0x1ce4f6(0x101));for(let _0xaafd92=0x0;_0xaafd92<_0x5df5f4['items'][_0x1ce4f6(0xfc)];_0xaafd92++){const _0x203448=_0x5df5f4[_0x1ce4f6(0x11d)][_0xaafd92][_0x1ce4f6(0x103)],_0x10b8fd=await axios[_0x1ce4f6(0x10e)](_0x203448,{'responseType':_0x1ce4f6(0x10c)}),_0x16884f=Buffer[_0x1ce4f6(0x115)](_0x10b8fd['data'],'binary');await _0x79d055['sendMessage'](_0x67deb8,{'image':_0x16884f,'caption':_0x1ce4f6(0x111)+(_0xaafd92+0x1)+'\x20from\x20your\x20search!\x20」-------*\x20🌟\x0a\x0a*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ꜱᴀᴅɪʏᴀ\x20ᴏꜰᴄ*\x0a\x0a'},{'quoted':_0x37937b});}}catch(_0x4c17cc){console[_0x1ce4f6(0x107)](_0x4c17cc),await _0x79d055['sendMessage'](_0x105bec+_0x1ce4f6(0x10b),{'text':''+_0x4c17cc},{'quoted':_0x37937b}),_0x212fc8(_0x1ce4f6(0x10f));}});
