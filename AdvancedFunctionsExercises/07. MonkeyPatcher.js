function solution(input){
    switch (input){
        case 'upvote':
            this.upvotes += 1;
            break;
        case 'downvote':
            this.downvotes += 1;
            break;
        case 'score':
            let reportedUpVotes = this.upvotes;
            let reportedDownVotes = this.downvotes;
            let  rating;
            let balance = this.upvotes - this.downvotes;
            let isMet = true;

            if(reportedUpVotes + reportedDownVotes > 50){
                let obfuscation = Math.ceil(Math.max(reportedDownVotes, reportedUpVotes) * 0.25);
                reportedUpVotes += obfuscation;
                reportedDownVotes += obfuscation;
            }
            if(reportedUpVotes + reportedDownVotes >= 10){
                if(this.upvotes / (this.upvotes + this.downvotes) > 0.66){
                    rating = 'hot';
                }else if(balance >= 0 && (this.upvotes >= 100 || this.downvotes >= 100)){
                    rating = 'controversial';
                }else if(balance < 0){
                    rating = 'unpopular';
                }else{
                 isMet = false;
                }
            }
            if(reportedUpVotes + reportedDownVotes < 10 || !isMet){
                rating = 'new';
            }
            return([reportedUpVotes, reportedDownVotes, balance, rating]);
    }

}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 4,
    downvotes: 5
};
solution.call(post, 'score');
solution.call(post, 'downvote');
solution.call(post, 'score');
let score = solution.call(post, 'upvote'); // [127, 127, 0, 'controversial']
solution.call(post, 'upvote');
solution.call(post, 'score')
// (executed 50 times)
score = solution.call(post, 'score');