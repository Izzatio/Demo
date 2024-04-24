gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDtxtObjects1= [];
gdjs.LeaderboardCode.GDtxtObjects2= [];
gdjs.LeaderboardCode.GDtxtObjects3= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{



}


{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("doc");
const iterableReference3 = runtimeScene.getScene().getVariables().get("FetchedData").getChild("docs");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.LeaderboardCode.GDtxtObjects1, gdjs.LeaderboardCode.GDtxtObjects3);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxtObjects3[i].getBehavior("Text").setText(gdjs.LeaderboardCode.GDtxtObjects3[i].getBehavior("Text").getText() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("i")) + 1) + ". " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("name")) + " >>>" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("score")) + gdjs.evtTools.string.newLine()));
}
}}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.firestore.startQuery("Myscore", "Leaderboard");
}{gdjs.evtTools.firebaseTools.firestore.queryOrderBy("Myscore", "score", "desc");
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("Myscore", runtimeScene.getScene().getVariables().get("FetchedData"), runtimeScene.getScene().getVariables().get("Status"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Status")) == "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt"), gdjs.LeaderboardCode.GDtxtObjects1);
{runtimeScene.getScene().getVariables().get("Status").setString("");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxtObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxtObjects1[i].getBehavior("Text").setText("Leaderboard" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine());
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDtxtObjects1.length = 0;
gdjs.LeaderboardCode.GDtxtObjects2.length = 0;
gdjs.LeaderboardCode.GDtxtObjects3.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
