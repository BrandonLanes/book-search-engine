import { User } from '../models/index.js';
import { signToken, AuthenticationError } from '../services/auth.js'; 
import type SaveBookArgs from '../interfaces/SaveBookArgs.js';

// Define types for the arguments
interface AddUserArgs {
  input:{
    username: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface BookArgs {
  bookId: string;
}

const resolvers = {
  Query: {
    // Query to get the authenticated user's information
    // The 'me' query relies on the context to check if the user is authenticated
    // Tested and working!
    getSingleUser: async (_parent: any, _args: any, context: any) => {
      console.log(context);
      // If the user is authenticated, find and return the user's information along with their thoughts
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      // If the user is not authenticated, throw an AuthenticationError
      throw new AuthenticationError('Could not authenticate user.');
    },
  },
  Mutation: {
    // Tested and working!
    createUser: async (_parent: any, args: AddUserArgs) => {
      // Create a new user with the provided username, email, and password
      const user = await User.create(args);
      console.log(user);
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
      console.log(token);
      // Return the token and the user
      return { token, user };
    },
    
    // Tested and working!
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
      // Find a user with the provided email
      const user = await User.findOne({ email });
    
      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);
    
      // If the password is incorrect, throw an AuthenticationError
      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
    
      // Return the token and the user
      return { token, user };
    },
    // Tested and working!
    saveBook: async (_parent: any, { input }: SaveBookArgs, context: any) => {
      if (context.user) {
        console.log(input);
      const updatedUser = 
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteBook: async (_parent: any, { bookId }: BookArgs, context: any) => {
      if (context.user) {
      const updatedUser =
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: bookId } },
          {new: true}
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

export default resolvers;
