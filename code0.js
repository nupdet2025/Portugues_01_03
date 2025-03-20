gdjs._49Code = {};
gdjs._49Code.localVariables = [];
gdjs._49Code.GD_9595opEro01Objects1= [];
gdjs._49Code.GD_9595opEro01Objects2= [];
gdjs._49Code.GD_9595opMov01Objects1= [];
gdjs._49Code.GD_9595opMov01Objects2= [];
gdjs._49Code.GD_95950p01Objects1= [];
gdjs._49Code.GD_95950p01Objects2= [];
gdjs._49Code.GDNewParticlesEmitterObjects1= [];
gdjs._49Code.GDNewParticlesEmitterObjects2= [];
gdjs._49Code.GDNewParticlesEmitter2Objects1= [];
gdjs._49Code.GDNewParticlesEmitter2Objects2= [];
gdjs._49Code.GDNewParticlesEmitter3Objects1= [];
gdjs._49Code.GDNewParticlesEmitter3Objects2= [];
gdjs._49Code.GDNewParticlesEmitter4Objects1= [];
gdjs._49Code.GDNewParticlesEmitter4Objects2= [];
gdjs._49Code.GDbg_95951Objects1= [];
gdjs._49Code.GDbg_95951Objects2= [];
gdjs._49Code.GDPersonagem1Objects1= [];
gdjs._49Code.GDPersonagem1Objects2= [];
gdjs._49Code.GDquadroObjects1= [];
gdjs._49Code.GDquadroObjects2= [];
gdjs._49Code.GD_95950p02Objects1= [];
gdjs._49Code.GD_95950p02Objects2= [];
gdjs._49Code.GD_9595opMov02Objects1= [];
gdjs._49Code.GD_9595opMov02Objects2= [];
gdjs._49Code.GD_95950p03Objects1= [];
gdjs._49Code.GD_95950p03Objects2= [];
gdjs._49Code.GD_9595opMov03Objects1= [];
gdjs._49Code.GD_9595opMov03Objects2= [];
gdjs._49Code.GD_9595opEro02Objects1= [];
gdjs._49Code.GD_9595opEro02Objects2= [];
gdjs._49Code.GD_9595opEro03Objects1= [];
gdjs._49Code.GD_9595opEro03Objects2= [];
gdjs._49Code.GDcursorObjects1= [];
gdjs._49Code.GDcursorObjects2= [];
gdjs._49Code.GDbg_9595PlayObjects1= [];
gdjs._49Code.GDbg_9595PlayObjects2= [];
gdjs._49Code.GDquadro_9595avancarObjects1= [];
gdjs._49Code.GDquadro_9595avancarObjects2= [];
gdjs._49Code.GDbtn_9595avancarObjects1= [];
gdjs._49Code.GDbtn_9595avancarObjects2= [];
gdjs._49Code.GDbg_9595startObjects1= [];
gdjs._49Code.GDbg_9595startObjects2= [];
gdjs._49Code.GDbg_9595start2Objects1= [];
gdjs._49Code.GDbg_9595start2Objects2= [];
gdjs._49Code.GDquadro_9595startObjects1= [];
gdjs._49Code.GDquadro_9595startObjects2= [];
gdjs._49Code.GDborboletaObjects1= [];
gdjs._49Code.GDborboletaObjects2= [];
gdjs._49Code.GDborboleta2Objects1= [];
gdjs._49Code.GDborboleta2Objects2= [];
gdjs._49Code.GDBlackBackgroundObjects1= [];
gdjs._49Code.GDBlackBackgroundObjects2= [];
gdjs._49Code.GDback_9595menuObjects1= [];
gdjs._49Code.GDback_9595menuObjects2= [];


gdjs._49Code.asyncCallback17416932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1b", false);
}gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._49Code.asyncCallback17416932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.userFunc0x9ecdc8 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
// Parameters
const spriteName = "borboleta"; // Substitua "YourSpriteName" pelo nome do sprite
const spriteList = runtimeScene.getObjects(spriteName);
 
if (spriteList.length === 0) {
    console.error(`O objeto "${spriteName}" não foi encontrado na cena.`);
    return; // Sai do script se o sprite não existir
}
 
const sprite = spriteList[0]; // Obtém o primeiro sprite da lista
 
// Configurações de movimento
const startX = 0; // Ponto X inicial
const endX = 1920; // Ponto X final
const speedX = 2; // Velocidade no eixo X
const maxYVariation = 50; // Amplitude do movimento no eixo Y
const speedY = 0.1; // Velocidade do movimento no eixo Y (quanto maior, mais rápido oscila)
 
// Initialize variables
if (!sprite.hasVariable("direction")) {
    sprite.getVariables().get("direction").setNumber(1); // Direção inicial do movimento (1 = direita, -1 = esquerda)
    sprite.getVariables().get("originalY").setNumber(sprite.getY()); // Armazena a posição Y original
    sprite.getVariables().get("time").setNumber(0); // Tempo usado para variação no eixo Y
}
 
// Atualize a direção do movimento no eixo X
let direction = sprite.getVariables().get("direction").getAsNumber();
if (sprite.getX() >= endX) {
    direction = -1; // Mudar para a esquerda
    sprite.flipX(true); // Inverter o sprite horizontalmente
}
if (sprite.getX() <= startX) {
    direction = 1; // Mudar para a direita
    sprite.flipX(false); // Restaurar a orientação original
}
sprite.getVariables().get("direction").setNumber(direction);
 
// Movimento no eixo X
sprite.setX(sprite.getX() + direction * speedX);
 
// Movimento no eixo Y (seno para suavizar a variação)
let time = sprite.getVariables().get("time").getAsNumber();
let originalY = sprite.getVariables().get("originalY").getAsNumber();
let yVariation = Math.sin(time) * maxYVariation; // Calcula a variação no eixo Y
sprite.setY(originalY + yVariation);
sprite.getVariables().get("time").setNumber(time + speedY); // Incrementa o tempo para criar o efeito de onda
};
gdjs._49Code.userFunc0x9edb20 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
// Parameters
const spriteName = "borboleta2"; // Substitua "YourSpriteName" pelo nome do sprite
const spriteList = runtimeScene.getObjects(spriteName);
 
if (spriteList.length === 0) {
    console.error(`O objeto "${spriteName}" não foi encontrado na cena.`);
    return; // Sai do script se o sprite não existir
}
 
const sprite = spriteList[0]; // Obtém o primeiro sprite da lista
 
// Configurações de movimento
const startX = -500; // Ponto X inicial
const endX = 1920; // Ponto X final
const speedX = 4; // Velocidade no eixo X
const maxYVariation = 70; // Amplitude do movimento no eixo Y
const speedY = 0.1; // Velocidade do movimento no eixo Y (quanto maior, mais rápido oscila)
 
// Initialize variables
if (!sprite.hasVariable("direction")) {
    sprite.getVariables().get("direction").setNumber(1); // Direção inicial do movimento (1 = direita, -1 = esquerda)
    sprite.getVariables().get("originalY").setNumber(sprite.getY()); // Armazena a posição Y original
    sprite.getVariables().get("time").setNumber(0); // Tempo usado para variação no eixo Y
}
 
// Atualize a direção do movimento no eixo X
let direction = sprite.getVariables().get("direction").getAsNumber();
if (sprite.getX() >= endX) {
    direction = -1; // Mudar para a esquerda
    sprite.flipX(true); // Inverter o sprite horizontalmente
}
if (sprite.getX() <= startX) {
    direction = 1; // Mudar para a direita
    sprite.flipX(false); // Restaurar a orientação original
}
sprite.getVariables().get("direction").setNumber(direction);
 
// Movimento no eixo X
sprite.setX(sprite.getX() + direction * speedX);
 
// Movimento no eixo Y (seno para suavizar a variação)
let time = sprite.getVariables().get("time").getAsNumber();
let originalY = sprite.getVariables().get("originalY").getAsNumber();
let yVariation = Math.sin(time) * maxYVariation; // Calcula a variação no eixo Y
sprite.setY(originalY + yVariation);
sprite.getVariables().get("time").setNumber(time + speedY); // Incrementa o tempo para criar o efeito de onda
};
gdjs._49Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._49Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._49Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._49Code.GDBlackBackgroundObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\64-Sundays-Twin-Musicom.mp3", 1, true, 10, 1);
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._49Code.GDBlackBackgroundObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBlackBackgroundObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._49Code.GDBlackBackgroundObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBlackBackgroundObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._49Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._49Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._49Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_avancar"), gdjs._49Code.GDbtn_9595avancarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDbtn_9595avancarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDbtn_9595avancarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDbtn_9595avancarObjects1[k] = gdjs._49Code.GDbtn_9595avancarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDbtn_9595avancarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\pop.ogg", false, 50, 1);
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.userFunc0x9ecdc8(runtimeScene);

}


{


gdjs._49Code.userFunc0x9edb20(runtimeScene);

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GD_9595opEro01Objects1.length = 0;
gdjs._49Code.GD_9595opEro01Objects2.length = 0;
gdjs._49Code.GD_9595opMov01Objects1.length = 0;
gdjs._49Code.GD_9595opMov01Objects2.length = 0;
gdjs._49Code.GD_95950p01Objects1.length = 0;
gdjs._49Code.GD_95950p01Objects2.length = 0;
gdjs._49Code.GDNewParticlesEmitterObjects1.length = 0;
gdjs._49Code.GDNewParticlesEmitterObjects2.length = 0;
gdjs._49Code.GDNewParticlesEmitter2Objects1.length = 0;
gdjs._49Code.GDNewParticlesEmitter2Objects2.length = 0;
gdjs._49Code.GDNewParticlesEmitter3Objects1.length = 0;
gdjs._49Code.GDNewParticlesEmitter3Objects2.length = 0;
gdjs._49Code.GDNewParticlesEmitter4Objects1.length = 0;
gdjs._49Code.GDNewParticlesEmitter4Objects2.length = 0;
gdjs._49Code.GDbg_95951Objects1.length = 0;
gdjs._49Code.GDbg_95951Objects2.length = 0;
gdjs._49Code.GDPersonagem1Objects1.length = 0;
gdjs._49Code.GDPersonagem1Objects2.length = 0;
gdjs._49Code.GDquadroObjects1.length = 0;
gdjs._49Code.GDquadroObjects2.length = 0;
gdjs._49Code.GD_95950p02Objects1.length = 0;
gdjs._49Code.GD_95950p02Objects2.length = 0;
gdjs._49Code.GD_9595opMov02Objects1.length = 0;
gdjs._49Code.GD_9595opMov02Objects2.length = 0;
gdjs._49Code.GD_95950p03Objects1.length = 0;
gdjs._49Code.GD_95950p03Objects2.length = 0;
gdjs._49Code.GD_9595opMov03Objects1.length = 0;
gdjs._49Code.GD_9595opMov03Objects2.length = 0;
gdjs._49Code.GD_9595opEro02Objects1.length = 0;
gdjs._49Code.GD_9595opEro02Objects2.length = 0;
gdjs._49Code.GD_9595opEro03Objects1.length = 0;
gdjs._49Code.GD_9595opEro03Objects2.length = 0;
gdjs._49Code.GDcursorObjects1.length = 0;
gdjs._49Code.GDcursorObjects2.length = 0;
gdjs._49Code.GDbg_9595PlayObjects1.length = 0;
gdjs._49Code.GDbg_9595PlayObjects2.length = 0;
gdjs._49Code.GDquadro_9595avancarObjects1.length = 0;
gdjs._49Code.GDquadro_9595avancarObjects2.length = 0;
gdjs._49Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._49Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._49Code.GDbg_9595startObjects1.length = 0;
gdjs._49Code.GDbg_9595startObjects2.length = 0;
gdjs._49Code.GDbg_9595start2Objects1.length = 0;
gdjs._49Code.GDbg_9595start2Objects2.length = 0;
gdjs._49Code.GDquadro_9595startObjects1.length = 0;
gdjs._49Code.GDquadro_9595startObjects2.length = 0;
gdjs._49Code.GDborboletaObjects1.length = 0;
gdjs._49Code.GDborboletaObjects2.length = 0;
gdjs._49Code.GDborboleta2Objects1.length = 0;
gdjs._49Code.GDborboleta2Objects2.length = 0;
gdjs._49Code.GDBlackBackgroundObjects1.length = 0;
gdjs._49Code.GDBlackBackgroundObjects2.length = 0;
gdjs._49Code.GDback_9595menuObjects1.length = 0;
gdjs._49Code.GDback_9595menuObjects2.length = 0;

gdjs._49Code.eventsList1(runtimeScene);
gdjs._49Code.GD_9595opEro01Objects1.length = 0;
gdjs._49Code.GD_9595opEro01Objects2.length = 0;
gdjs._49Code.GD_9595opMov01Objects1.length = 0;
gdjs._49Code.GD_9595opMov01Objects2.length = 0;
gdjs._49Code.GD_95950p01Objects1.length = 0;
gdjs._49Code.GD_95950p01Objects2.length = 0;
gdjs._49Code.GDNewParticlesEmitterObjects1.length = 0;
gdjs._49Code.GDNewParticlesEmitterObjects2.length = 0;
gdjs._49Code.GDNewParticlesEmitter2Objects1.length = 0;
gdjs._49Code.GDNewParticlesEmitter2Objects2.length = 0;
gdjs._49Code.GDNewParticlesEmitter3Objects1.length = 0;
gdjs._49Code.GDNewParticlesEmitter3Objects2.length = 0;
gdjs._49Code.GDNewParticlesEmitter4Objects1.length = 0;
gdjs._49Code.GDNewParticlesEmitter4Objects2.length = 0;
gdjs._49Code.GDbg_95951Objects1.length = 0;
gdjs._49Code.GDbg_95951Objects2.length = 0;
gdjs._49Code.GDPersonagem1Objects1.length = 0;
gdjs._49Code.GDPersonagem1Objects2.length = 0;
gdjs._49Code.GDquadroObjects1.length = 0;
gdjs._49Code.GDquadroObjects2.length = 0;
gdjs._49Code.GD_95950p02Objects1.length = 0;
gdjs._49Code.GD_95950p02Objects2.length = 0;
gdjs._49Code.GD_9595opMov02Objects1.length = 0;
gdjs._49Code.GD_9595opMov02Objects2.length = 0;
gdjs._49Code.GD_95950p03Objects1.length = 0;
gdjs._49Code.GD_95950p03Objects2.length = 0;
gdjs._49Code.GD_9595opMov03Objects1.length = 0;
gdjs._49Code.GD_9595opMov03Objects2.length = 0;
gdjs._49Code.GD_9595opEro02Objects1.length = 0;
gdjs._49Code.GD_9595opEro02Objects2.length = 0;
gdjs._49Code.GD_9595opEro03Objects1.length = 0;
gdjs._49Code.GD_9595opEro03Objects2.length = 0;
gdjs._49Code.GDcursorObjects1.length = 0;
gdjs._49Code.GDcursorObjects2.length = 0;
gdjs._49Code.GDbg_9595PlayObjects1.length = 0;
gdjs._49Code.GDbg_9595PlayObjects2.length = 0;
gdjs._49Code.GDquadro_9595avancarObjects1.length = 0;
gdjs._49Code.GDquadro_9595avancarObjects2.length = 0;
gdjs._49Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._49Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._49Code.GDbg_9595startObjects1.length = 0;
gdjs._49Code.GDbg_9595startObjects2.length = 0;
gdjs._49Code.GDbg_9595start2Objects1.length = 0;
gdjs._49Code.GDbg_9595start2Objects2.length = 0;
gdjs._49Code.GDquadro_9595startObjects1.length = 0;
gdjs._49Code.GDquadro_9595startObjects2.length = 0;
gdjs._49Code.GDborboletaObjects1.length = 0;
gdjs._49Code.GDborboletaObjects2.length = 0;
gdjs._49Code.GDborboleta2Objects1.length = 0;
gdjs._49Code.GDborboleta2Objects2.length = 0;
gdjs._49Code.GDBlackBackgroundObjects1.length = 0;
gdjs._49Code.GDBlackBackgroundObjects2.length = 0;
gdjs._49Code.GDback_9595menuObjects1.length = 0;
gdjs._49Code.GDback_9595menuObjects2.length = 0;


return;

}

gdjs['_49Code'] = gdjs._49Code;
