const _0x5d3f54=_0x1aca;function _0x1aca(_0x39a053,_0x43c584){const _0x310b63=_0x310b();return _0x1aca=function(_0x1aca24,_0x92f294){_0x1aca24=_0x1aca24-0x80;let _0x37cd64=_0x310b63[_0x1aca24];return _0x37cd64;},_0x1aca(_0x39a053,_0x43c584);}function _0x310b(){const _0x51ec49=['reply','167690hNrNtd','885zLJfrS','4999668PODtAl','AUTO_REPLY','sendMessage','360xNEeJF','SADIYA-MD','toLowerCase','AUTO_STICKER','body','AUTO_VOICE','join','../DATA/voice.json','15964dmtuzx','readFileSync','true','62023500WcPHSV','parse','2661kEnYbl','../lib/database','sendPresenceUpdate','../DATA/sticker.json','../command','8980506HILfHP','utf8','738EAVBdk','538OMFTKd','36106dhduOk','../DATA/reply.json'];_0x310b=function(){return _0x51ec49;};return _0x310b();}(function(_0x5b5d34,_0x483052){const _0x3901a5=_0x1aca,_0xcca448=_0x5b5d34();while(!![]){try{const _0x263622=-parseInt(_0x3901a5(0x8a))/0x1*(parseInt(_0x3901a5(0x92))/0x2)+-parseInt(_0x3901a5(0x98))/0x3+parseInt(_0x3901a5(0x85))/0x4*(parseInt(_0x3901a5(0x97))/0x5)+-parseInt(_0x3901a5(0x8f))/0x6+parseInt(_0x3901a5(0x93))/0x7*(-parseInt(_0x3901a5(0x9b))/0x8)+-parseInt(_0x3901a5(0x91))/0x9*(parseInt(_0x3901a5(0x96))/0xa)+parseInt(_0x3901a5(0x88))/0xb;if(_0x263622===_0x483052)break;else _0xcca448['push'](_0xcca448['shift']());}catch(_0x540e3b){_0xcca448['push'](_0xcca448['shift']());}}}(_0x310b,0xd19ff));const fs=require('fs'),path=require('path'),{readEnv}=require(_0x5d3f54(0x8b)),{cmd,commands}=require(_0x5d3f54(0x8e));cmd({'on':'body'},async(_0x187090,_0x2d5444,_0x511936,{from:_0x5b1748,body:_0x24c3bd,isOwner:_0x5ed451})=>{const _0x3fb1c6=_0x5d3f54,_0x119901=path[_0x3fb1c6(0x83)](__dirname,_0x3fb1c6(0x94)),_0x32fee4=JSON[_0x3fb1c6(0x89)](fs['readFileSync'](_0x119901,_0x3fb1c6(0x90)));for(const _0x51cc02 in _0x32fee4){if(_0x24c3bd['toLowerCase']()===_0x51cc02[_0x3fb1c6(0x9d)]()){const _0xc13a73=await readEnv();_0xc13a73[_0x3fb1c6(0x82)]==='true'&&(await _0x187090[_0x3fb1c6(0x8c)]('recording',_0x5b1748),await _0x187090[_0x3fb1c6(0x9a)](_0x5b1748,{'audio':{'url':_0x32fee4[_0x51cc02]},'mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2d5444}));}}}),cmd({'on':_0x5d3f54(0x81)},async(_0x3dce5f,_0x1cc28f,_0x43002e,{from:_0x48d9e3,body:_0xc70476,isOwner:_0x54e4a3})=>{const _0x245203=_0x5d3f54,_0x124786=path[_0x245203(0x83)](__dirname,_0x245203(0x8d)),_0x3a20c6=JSON[_0x245203(0x89)](fs['readFileSync'](_0x124786,_0x245203(0x90)));for(const _0xcfa029 in _0x3a20c6){if(_0xc70476[_0x245203(0x9d)]()===_0xcfa029['toLowerCase']()){const _0x2b3db1=await readEnv();_0x2b3db1[_0x245203(0x80)]===_0x245203(0x87)&&await _0x3dce5f[_0x245203(0x9a)](_0x48d9e3,{'sticker':{'url':_0x3a20c6[_0xcfa029]},'package':_0x245203(0x9c)},{'quoted':_0x1cc28f});}}}),cmd({'on':_0x5d3f54(0x81)},async(_0x35b8cb,_0x52f363,_0x4708f1,{from:_0x479367,body:_0x3506ac,isOwner:_0x44d3ce})=>{const _0x544a3d=_0x5d3f54,_0x54f43a=path[_0x544a3d(0x83)](__dirname,_0x544a3d(0x84)),_0x1fd997=JSON[_0x544a3d(0x89)](fs[_0x544a3d(0x86)](_0x54f43a,'utf8'));for(const _0x4b0dd3 in _0x1fd997){if(_0x3506ac[_0x544a3d(0x9d)]()===_0x4b0dd3[_0x544a3d(0x9d)]()){const _0x41dac4=await readEnv();_0x41dac4[_0x544a3d(0x99)]===_0x544a3d(0x87)&&await _0x4708f1[_0x544a3d(0x95)](_0x1fd997[_0x4b0dd3]);}}});
