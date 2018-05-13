class MailBox{
    constructor(){
        this.mailbox = new Map();
    }

    get messageCount(){
        return this.mailbox.size;
    }

    addMessage(subject, text){
        this.mailbox.set(subject, text);
        return this;
    }

    deleteAllMessages(){
        this.mailbox.clear();
    }

    findBySubject(substr) {
        let messages = [];
        for (let [subject, text] of this.mailbox.entries()) {
            if (subject.includes(substr)){
                messages.push({subject:`${subject}`, text:`${text}`})
            }
        }

        return messages;
    }

    toString(){
        if(this.mailbox.size > 0){
            let result = '';
            for (let [key, value] of this.mailbox.entries()) {
                result += ` * [${key}] ${value}\n`
            }
            return result;
        }
        return ' * (empty mailbox)';
    }
}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));
mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
