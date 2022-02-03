import PostSchema from './post.js';
import FilesService from './FilesService.js';

class PostService {
	async createdPost (postData, picture) {
			const fileName = FilesService.saveFile(picture);
			const post = await PostSchema.create({ ...postData, picture: fileName });
			
			return post;
	}

	async getPosts () {
		const posts = await PostSchema.find();

		return posts;
	}

	async getOnePost (id) {
		if (!id) {
			throw new Error('id is not passed');
		}
		const postById = await PostSchema.findById(id);

		return postById;
	}

	async updatedPost (post) {
		if (!post._id) {
			throw new Error('id is not passed');
		}

		const updatedPost = await PostSchema.findByIdAndUpdate(post._id, post, { new: true });

		return updatedPost;
	}

	async deletedPost (id) {
		if (!id) {
			throw new Error('id is not passed');
		}

		const deletedPost = await PostSchema.findByIdAndDelete(id);

		return deletedPost
	}
}

export default new PostService();
