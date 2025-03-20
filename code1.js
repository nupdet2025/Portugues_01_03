gdjs._49bCode = {};
gdjs._49bCode.localVariables = [];
gdjs._49bCode.GD_9595opEro01Objects1= [];
gdjs._49bCode.GD_9595opEro01Objects2= [];
gdjs._49bCode.GD_9595opMov01Objects1= [];
gdjs._49bCode.GD_9595opMov01Objects2= [];
gdjs._49bCode.GD_95950p01Objects1= [];
gdjs._49bCode.GD_95950p01Objects2= [];
gdjs._49bCode.GDNewParticlesEmitterObjects1= [];
gdjs._49bCode.GDNewParticlesEmitterObjects2= [];
gdjs._49bCode.GDNewParticlesEmitter2Objects1= [];
gdjs._49bCode.GDNewParticlesEmitter2Objects2= [];
gdjs._49bCode.GDNewParticlesEmitter3Objects1= [];
gdjs._49bCode.GDNewParticlesEmitter3Objects2= [];
gdjs._49bCode.GDNewParticlesEmitter4Objects1= [];
gdjs._49bCode.GDNewParticlesEmitter4Objects2= [];
gdjs._49bCode.GDbg_95951Objects1= [];
gdjs._49bCode.GDbg_95951Objects2= [];
gdjs._49bCode.GDPersonagem1Objects1= [];
gdjs._49bCode.GDPersonagem1Objects2= [];
gdjs._49bCode.GDquadroObjects1= [];
gdjs._49bCode.GDquadroObjects2= [];
gdjs._49bCode.GD_95950p02Objects1= [];
gdjs._49bCode.GD_95950p02Objects2= [];
gdjs._49bCode.GD_9595opMov02Objects1= [];
gdjs._49bCode.GD_9595opMov02Objects2= [];
gdjs._49bCode.GD_95950p03Objects1= [];
gdjs._49bCode.GD_95950p03Objects2= [];
gdjs._49bCode.GD_9595opMov03Objects1= [];
gdjs._49bCode.GD_9595opMov03Objects2= [];
gdjs._49bCode.GD_9595opEro02Objects1= [];
gdjs._49bCode.GD_9595opEro02Objects2= [];
gdjs._49bCode.GD_9595opEro03Objects1= [];
gdjs._49bCode.GD_9595opEro03Objects2= [];
gdjs._49bCode.GDcursorObjects1= [];
gdjs._49bCode.GDcursorObjects2= [];
gdjs._49bCode.GDbg_9595PlayObjects1= [];
gdjs._49bCode.GDbg_9595PlayObjects2= [];
gdjs._49bCode.GDquadro_9595avancarObjects1= [];
gdjs._49bCode.GDquadro_9595avancarObjects2= [];
gdjs._49bCode.GDbtn_9595avancarObjects1= [];
gdjs._49bCode.GDbtn_9595avancarObjects2= [];
gdjs._49bCode.GDBlackBackgroundObjects1= [];
gdjs._49bCode.GDBlackBackgroundObjects2= [];
gdjs._49bCode.GDbg_9595startObjects1= [];
gdjs._49bCode.GDbg_9595startObjects2= [];
gdjs._49bCode.GDbg_9595start2Objects1= [];
gdjs._49bCode.GDbg_9595start2Objects2= [];
gdjs._49bCode.GDquadro_9595startObjects1= [];
gdjs._49bCode.GDquadro_9595startObjects2= [];
gdjs._49bCode.GDborboletaObjects1= [];
gdjs._49bCode.GDborboletaObjects2= [];
gdjs._49bCode.GDborboleta2Objects1= [];
gdjs._49bCode.GDborboleta2Objects2= [];
gdjs._49bCode.GDbtn_9595jogarObjects1= [];
gdjs._49bCode.GDbtn_9595jogarObjects2= [];
gdjs._49bCode.GDback_9595menuObjects1= [];
gdjs._49bCode.GDback_9595menuObjects2= [];


gdjs._49bCode.asyncCallback17418780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49bCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}gdjs._49bCode.localVariables.length = 0;
}
gdjs._49bCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49bCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._49bCode.asyncCallback17418780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49bCode.asyncCallback17420268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49bCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}gdjs._49bCode.localVariables.length = 0;
}
gdjs._49bCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49bCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._49bCode.asyncCallback17420268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49bCode.userFunc0x9ee1b0 = function GDJSInlineCode(runtimeScene) {
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
gdjs._49bCode.userFunc0x9ef1f8 = function GDJSInlineCode(runtimeScene) {
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
gdjs._49bCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._49bCode.GDcursorObjects1);
{for(var i = 0, len = gdjs._49bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._49bCode.GDcursorObjects1);
{for(var i = 0, len = gdjs._49bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._49bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_avancar"), gdjs._49bCode.GDbtn_9595avancarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49bCode.GDbtn_9595avancarObjects1.length;i<l;++i) {
    if ( gdjs._49bCode.GDbtn_9595avancarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49bCode.GDbtn_9595avancarObjects1[k] = gdjs._49bCode.GDbtn_9595avancarObjects1[i];
        ++k;
    }
}
gdjs._49bCode.GDbtn_9595avancarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\pop.ogg", false, 50, 1);
}
{ //Subevents
gdjs._49bCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs._49bCode.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49bCode.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs._49bCode.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49bCode.GDbtn_9595jogarObjects1[k] = gdjs._49bCode.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs._49bCode.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\pop.ogg", false, 50, 1);
}
{ //Subevents
gdjs._49bCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._49bCode.userFunc0x9ee1b0(runtimeScene);

}


{


gdjs._49bCode.userFunc0x9ef1f8(runtimeScene);

}


};

gdjs._49bCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49bCode.GD_9595opEro01Objects1.length = 0;
gdjs._49bCode.GD_9595opEro01Objects2.length = 0;
gdjs._49bCode.GD_9595opMov01Objects1.length = 0;
gdjs._49bCode.GD_9595opMov01Objects2.length = 0;
gdjs._49bCode.GD_95950p01Objects1.length = 0;
gdjs._49bCode.GD_95950p01Objects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitter2Objects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitter2Objects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitter3Objects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitter3Objects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitter4Objects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitter4Objects2.length = 0;
gdjs._49bCode.GDbg_95951Objects1.length = 0;
gdjs._49bCode.GDbg_95951Objects2.length = 0;
gdjs._49bCode.GDPersonagem1Objects1.length = 0;
gdjs._49bCode.GDPersonagem1Objects2.length = 0;
gdjs._49bCode.GDquadroObjects1.length = 0;
gdjs._49bCode.GDquadroObjects2.length = 0;
gdjs._49bCode.GD_95950p02Objects1.length = 0;
gdjs._49bCode.GD_95950p02Objects2.length = 0;
gdjs._49bCode.GD_9595opMov02Objects1.length = 0;
gdjs._49bCode.GD_9595opMov02Objects2.length = 0;
gdjs._49bCode.GD_95950p03Objects1.length = 0;
gdjs._49bCode.GD_95950p03Objects2.length = 0;
gdjs._49bCode.GD_9595opMov03Objects1.length = 0;
gdjs._49bCode.GD_9595opMov03Objects2.length = 0;
gdjs._49bCode.GD_9595opEro02Objects1.length = 0;
gdjs._49bCode.GD_9595opEro02Objects2.length = 0;
gdjs._49bCode.GD_9595opEro03Objects1.length = 0;
gdjs._49bCode.GD_9595opEro03Objects2.length = 0;
gdjs._49bCode.GDcursorObjects1.length = 0;
gdjs._49bCode.GDcursorObjects2.length = 0;
gdjs._49bCode.GDbg_9595PlayObjects1.length = 0;
gdjs._49bCode.GDbg_9595PlayObjects2.length = 0;
gdjs._49bCode.GDquadro_9595avancarObjects1.length = 0;
gdjs._49bCode.GDquadro_9595avancarObjects2.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects2.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects1.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects2.length = 0;
gdjs._49bCode.GDbg_9595startObjects1.length = 0;
gdjs._49bCode.GDbg_9595startObjects2.length = 0;
gdjs._49bCode.GDbg_9595start2Objects1.length = 0;
gdjs._49bCode.GDbg_9595start2Objects2.length = 0;
gdjs._49bCode.GDquadro_9595startObjects1.length = 0;
gdjs._49bCode.GDquadro_9595startObjects2.length = 0;
gdjs._49bCode.GDborboletaObjects1.length = 0;
gdjs._49bCode.GDborboletaObjects2.length = 0;
gdjs._49bCode.GDborboleta2Objects1.length = 0;
gdjs._49bCode.GDborboleta2Objects2.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects2.length = 0;
gdjs._49bCode.GDback_9595menuObjects1.length = 0;
gdjs._49bCode.GDback_9595menuObjects2.length = 0;

gdjs._49bCode.eventsList2(runtimeScene);
gdjs._49bCode.GD_9595opEro01Objects1.length = 0;
gdjs._49bCode.GD_9595opEro01Objects2.length = 0;
gdjs._49bCode.GD_9595opMov01Objects1.length = 0;
gdjs._49bCode.GD_9595opMov01Objects2.length = 0;
gdjs._49bCode.GD_95950p01Objects1.length = 0;
gdjs._49bCode.GD_95950p01Objects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitter2Objects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitter2Objects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitter3Objects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitter3Objects2.length = 0;
gdjs._49bCode.GDNewParticlesEmitter4Objects1.length = 0;
gdjs._49bCode.GDNewParticlesEmitter4Objects2.length = 0;
gdjs._49bCode.GDbg_95951Objects1.length = 0;
gdjs._49bCode.GDbg_95951Objects2.length = 0;
gdjs._49bCode.GDPersonagem1Objects1.length = 0;
gdjs._49bCode.GDPersonagem1Objects2.length = 0;
gdjs._49bCode.GDquadroObjects1.length = 0;
gdjs._49bCode.GDquadroObjects2.length = 0;
gdjs._49bCode.GD_95950p02Objects1.length = 0;
gdjs._49bCode.GD_95950p02Objects2.length = 0;
gdjs._49bCode.GD_9595opMov02Objects1.length = 0;
gdjs._49bCode.GD_9595opMov02Objects2.length = 0;
gdjs._49bCode.GD_95950p03Objects1.length = 0;
gdjs._49bCode.GD_95950p03Objects2.length = 0;
gdjs._49bCode.GD_9595opMov03Objects1.length = 0;
gdjs._49bCode.GD_9595opMov03Objects2.length = 0;
gdjs._49bCode.GD_9595opEro02Objects1.length = 0;
gdjs._49bCode.GD_9595opEro02Objects2.length = 0;
gdjs._49bCode.GD_9595opEro03Objects1.length = 0;
gdjs._49bCode.GD_9595opEro03Objects2.length = 0;
gdjs._49bCode.GDcursorObjects1.length = 0;
gdjs._49bCode.GDcursorObjects2.length = 0;
gdjs._49bCode.GDbg_9595PlayObjects1.length = 0;
gdjs._49bCode.GDbg_9595PlayObjects2.length = 0;
gdjs._49bCode.GDquadro_9595avancarObjects1.length = 0;
gdjs._49bCode.GDquadro_9595avancarObjects2.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects2.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects1.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects2.length = 0;
gdjs._49bCode.GDbg_9595startObjects1.length = 0;
gdjs._49bCode.GDbg_9595startObjects2.length = 0;
gdjs._49bCode.GDbg_9595start2Objects1.length = 0;
gdjs._49bCode.GDbg_9595start2Objects2.length = 0;
gdjs._49bCode.GDquadro_9595startObjects1.length = 0;
gdjs._49bCode.GDquadro_9595startObjects2.length = 0;
gdjs._49bCode.GDborboletaObjects1.length = 0;
gdjs._49bCode.GDborboletaObjects2.length = 0;
gdjs._49bCode.GDborboleta2Objects1.length = 0;
gdjs._49bCode.GDborboleta2Objects2.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects2.length = 0;
gdjs._49bCode.GDback_9595menuObjects1.length = 0;
gdjs._49bCode.GDback_9595menuObjects2.length = 0;


return;

}

gdjs['_49bCode'] = gdjs._49bCode;
