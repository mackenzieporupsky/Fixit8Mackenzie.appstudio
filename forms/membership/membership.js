
//defined memberName
let memberName = " "

//Array of members
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
  
//function 
btnRun.onclick=function(){
  memberName = inptMemberName.value
  if (members.includes(memberName) == true) { 
    lblResponse.value = "You are a member"
  } else { 
    lblResponse.value = "You are not a member, but we have added your name."
    members.push(memberName)
  }
}
