//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//Add one new guest to the beginning of your array.

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


var fMembers=["Grandmother","Grandfather","Uncle"];

guestInvitaoin(fMembers);
fMembers.unshift("Aunt");
fMembers.splice(2,0,"Brother");
fMembers.push("Sister");
guestInvitaoin(fMembers);   

function guestInvitaoin(guestList){
    var pos = 0;

            for(var i of guestList){

                pos++;

                console.log(`Guest No ${pos} Dear ${i}, you are cordially invited to dinner at my place on Saturday night. I hope you can make it!
                `);
              }
        }