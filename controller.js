import Post from './post.js';
import PostService from './PostService.js';

class PostController {
	async create (req, res) {
		try {
			const postData = req.body;
			const picture = req.files.picture;

			const post = await PostService.createdPost(postData, picture);

			res.json(post);
		} catch(e) {
			res.status(500).json(e.message);
		}
	}

	async getAll (req, res) {
		try {
			const posts = await PostService.getPosts();
			res.status(200).json(posts);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getOne (req, res) {
		try {
			const { id } = req.params;
			const postById = await PostService.getOnePost(id);

			res.status(200).json(postById);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async update (req, res) {
		try {
			const post = req.body;

			const updatedPost = await PostService.updatedPost(post);

			res.status(200).json(updatedPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async delete (req, res) {
		try {
			const { id } = req.params;

			const deletedPost = await PostService.deletedPost(id);

			res.json(deletedPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

export default new PostController;
