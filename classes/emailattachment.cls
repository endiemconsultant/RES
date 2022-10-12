public class emailattachment {

public string MilestoneId;
public string attid;
public Map<String,String> urlMap=new Map<String,String>();
public List<Attachment> attach;


public string getMilestoneId() {
return null;
}

public void setMilestoneId(String s) {
MilestoneId=s;
}

public Map<String,String> getattach() {
attach=[Select id,name From Attachment Where Parentid=:MilestoneId];

for(Attachment att1:attach) {
String urls='https://c.na15.content.force.com/sfc/servlet.shepherd/version/download/'+att1.id;
urlMap.put(urls,att1.Name);
}
return urlMap;
}

public void setattach(List<Attachment> ata) {
attach=ata;
}

}