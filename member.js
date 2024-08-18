function skillsMember() {
    var member = document.getElementById("member");
    var skill = document.getElementById("skill");
    var memberVal = member.options[member.selectedIndex].value;
    var skillVal = skill.options[skill.selectedIndex].value;
    var memberValInt = parseInt(memberVal);
    var skillValInt = parseInt(skillVal);
    var memberSkill = memberValInt * skillValInt;
    document.getElementById("memberSkill").innerHTML = memberSkill;
}