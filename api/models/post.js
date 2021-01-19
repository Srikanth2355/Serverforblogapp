const PATH = "./data.json";
const fs = require("fs")

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog(postId){
        const posts = this.readData();
        const foundpost = posts.find((post) => post.id == postId);
        return foundpost;
    }
    add(newpost){
        const currentPosts = this.readData();
        currentPosts.unshift(newpost);
        this.storedata(currentPosts);
    }

    readData(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storedata(rawdata){
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH,data);
    }
}

module.exports = Post;