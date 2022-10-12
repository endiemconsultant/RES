global with sharing class Org_Contacts_ApexCls implements kkltng.HierarchyComponentInterface{
global kkltng.HierarchyComponentController.hierarchyData getFullHierarchyData(String inData){
 
kkltng.HierarchyComponentController.hierarchyData hdAll = new kkltng.HierarchyComponentController.hierarchyData();
List<kkltng.HierarchyComponentController.node> nodes = new List<kkltng.HierarchyComponentController.node>();
for(Integer i=0;i<110;i=i+10){
kkltng.HierarchyComponentController.node node = new kkltng.HierarchyComponentController.node();
node.id = String.valueOf(i);
if(i>0){
node.parentid = String.valueOf(i-10);
}
node.text = 'Node: ' + String.valueOf(i) ;
node.description = 'Node Number: ' + String.valueOf(i);
node.type = 'text';
node.imageURL = 'https://someurl here';
kkltng.HierarchyComponentController.evt evt = new kkltng.HierarchyComponentController.evt();
evt.name = 'e.force:navigateToObjectHome';
evt.params = '{"scope":"Account"}';
//evt.name = 'e.force:navigateToComponent';
//evt.params = '{"componentDef":"kkltng:ContactsNearby","componentAttributes":{"maxDistance":"1000"}}';
 
node.rootNodeClick = evt;
node.leftIconClick = null;
node.rightIconClick = null;
node.data = null;
nodes.add(node);
 
for(Integer j=1;j<10;j++){
kkltng.HierarchyComponentController.node cnode = new kkltng.HierarchyComponentController.node();
cnode.id = String.valueOf(j+i);
cnode.parentid = String.valueOf(i);
cnode.text = 'Node: ' + String.valueOf(j+i);
cnode.description = 'Node Number: ' + String.valueOf(j+i);
cnode.type = 'text';
cnode.rootNodeClick = null;
cnode.leftIconClick = null;
cnode.rightIconClick = null;
cnode.data = null;
 
nodes.add(cnode);
}
}
hdAll.nodes = nodes;
return hdAll;
}
 
global kkltng.HierarchyComponentController.hierarchyData getHierarchyDataOnDemand(String inData,kkltng.HierarchyComponentController.node rootNode){
kkltng.HierarchyComponentController.hierarchyData hdAll = new kkltng.HierarchyComponentController.hierarchyData();
List<kkltng.HierarchyComponentController.node> nodes = new List<kkltng.HierarchyComponentController.node>();
 
for(Integer i=0;i<110;i=i+10){
kkltng.HierarchyComponentController.node node = new kkltng.HierarchyComponentController.node();
node.id = String.valueOf(i);
if(i>0){
node.parentid = String.valueOf(i-10);
}
node.text = 'Node: ' + String.valueOf(i) ;
node.description = 'Node Number: ' + String.valueOf(i);
node.type = 'text';
node.imageURL = 'https://someurl here';
kkltng.HierarchyComponentController.evt evt = new kkltng.HierarchyComponentController.evt();
evt.name = 'e.force:navigateToObjectHome';
evt.params = '{"scope":"Account"}';
 
node.rootNodeClick = evt;
node.leftIconClick = null;
node.rightIconClick = null;
node.data = null;
nodes.add(node);
 
for(Integer j=1;j<10;j++){
kkltng.HierarchyComponentController.node cnode = new kkltng.HierarchyComponentController.node();
cnode.id = String.valueOf(j+i);
cnode.parentid = String.valueOf(i);
cnode.text = 'Node: ' + String.valueOf(j+i);
cnode.description = 'Node Number: ' + String.valueOf(j+i);
cnode.type = 'text';
cnode.rootNodeClick = null;
cnode.leftIconClick = null;
cnode.rightIconClick = null;
cnode.data = null;
 
nodes.add(cnode);
}
}
hdAll.rootNode = rootNode;
hdAll.nodes = nodes;
 
return hdAll;
}
}