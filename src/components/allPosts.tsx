import React from 'react';
import type { Post } from './landing-page';
import { Heart, MessageCircle, Send} from 'lucide-react';

interface Props {
    isAuthenticated: boolean,
    posts: Post[] 
}

const AllPosts: React.FC<Props> = (props) => {
    
    const showAlert: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(props.isAuthenticated){
            alert("Function not implemented");
        }  
    }

    return(
        <>
            <div className="space-y-6">
            {props.posts.map((post: Post) => (
                <div className='bg-[#f8f8f8] p-2 rounded-2xl mb-4'>
                <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="p-4">
                    {/* Post Header */}
                    <div className="flex items-start space-x-3 mb-3">
                    <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{post.author}</h3>
                        </div>
                        <p className="text-sm text-gray-500">{post.timeAgo}</p>
                    </div>
                    </div>

                    {/* Post Content */}
                    <div className="">
                    <div className="flex items-start space-x-2">
                        <span className="text-xl rounded-full p-1 bg-[#f4f4f4]">{post.emoji}</span>
                        <p className="text-gray-700 leading-relaxed flex-1">
                        {post.content}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                {/* Post Actions */}
                <div className="flex items-center pt-3 border-t border-gray-100">
                    <button onClick={showAlert}
                    className='flex items-center space-x-2 px-3 py-1 rounded-full transition-colors text-gray-600 hover:bg-gray-100'
                    >
                    <Heart
                        className={`w-4 h-4`}
                    />
                    </button>

                    <button onClick={showAlert} className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    </button>

                    <button onClick={showAlert} className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                    <Send className="w-4 h-4" />
                    </button>
                </div>
                </div>
            ))}
            </div>
        </>
    );
}

export default AllPosts;