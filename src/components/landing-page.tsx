import React, { useEffect, useState } from 'react';
import NewPostCard from './newPost';
import AllPosts from './allPosts';
import AuthForm from './auth';

export interface Post {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  emoji: string;
}

interface Props {
  isAuthenticated: boolean,
  setIsAuthenticated: (val:boolean) => void
}

const FooRumApp: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Theresa Webb",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&rounded=full",
      timeAgo: "5 mins ago",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      emoji: "😊",
    },
    {
      id: 2,
      author: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&rounded=full",
      timeAgo: "12 mins ago",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      emoji: "👍",
    },
    {
      id: 3,
      author: "Jane Doe",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&rounded=full",
      timeAgo: "2 mins ago",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      emoji: "💀",
    }
  ]);

  const [showAuthForm, setShowAuthForm] = useState<boolean>(false);

  const handleNewPost = (newPostContent: string) => {
    if (newPostContent.trim()) {
      const newPost: Post = {
        id: posts.length + 1,
        author: "You",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face&rounded=full",
        timeAgo: "now",
        content: newPostContent,
        emoji: "😊"
      };
      setPosts([newPost, ...posts]);
    }
  };

  const handleContentClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(!props.isAuthenticated){
      setShowAuthForm(true);
    }
  }

  useEffect(() => {
    if(props.isAuthenticated){
      setShowAuthForm(false);
    }
  }, [props.isAuthenticated]);

  return (
    <div className={`mt-4 min-h-screen`}>
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-6" onClick={handleContentClick}>
        {/* New Post */}
        <NewPostCard 
          isAuthenticated={props.isAuthenticated}
          handleNewPost={handleNewPost}
        />
        {/* Posts Feed */}
        <AllPosts
          isAuthenticated={props.isAuthenticated}
          posts={posts}
        />
      </main>
      {/* Auth Pop up */}
      {showAuthForm && 
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center z-50 ${showAuthForm ? "modal-enter" : "modal-exit"}`}>
            <AuthForm 
              setIsAuthenticated={props.setIsAuthenticated}
            />
        </div>
      }
    </div>
  );
};

export default FooRumApp;