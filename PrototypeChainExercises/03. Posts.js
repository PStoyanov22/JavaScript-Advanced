function result(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment)
        }

        toString(){
            let inheritStr = super.toString() + '\n';
            let result = this.likes - this.dislikes;
            inheritStr += `Rating: ${result}\n`;

            if(this.comments.length > 0){
                inheritStr += 'Comments:' + '\n';
                for (let comment of this.comments) {
                    inheritStr += ' * ' + comment + '\n';
                }
            }
            return inheritStr.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view(){
          this.views++;
          return this;
        }

        toString(){
            let inheritStr = super.toString() + '\n';
            return inheritStr + `Views: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }

}
let Post = result().Post;
let SocialMediaPost = result().SocialMediaPost;
let post = new Post("Post", "Content");

console.log(post.toString());


// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 5, 10);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");



console.log(scm.toString());

let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString())

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!