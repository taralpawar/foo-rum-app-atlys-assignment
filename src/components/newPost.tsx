import React, { useState } from 'react';
import { Plus, Mic, Send, Bold, Italic, Underline, List, Quote, Code, Trash2, VideoIcon } from 'lucide-react';

interface Props {
    isAuthenticated: boolean,
    handleNewPost: (post: string) => void
} 

const NewPostCard: React.FC<Props> = (props) => {

    const [newPostContent, setNewPostContent] = useState<string>("");

    const handlePost: React.MouseEventHandler<HTMLButtonElement> = () => {
        props.handleNewPost(newPostContent);
        setNewPostContent('');
    }

    const showAlert: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(props.isAuthenticated){
            alert("Function not implemented");
        }  
    }

    return(
        <>
            <div className='bg-[#f8f8f8] p-2 rounded-xl mb-4'>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-2">
                    {/* Toolbar */}
                    <div className="flex items-center space-x-2 mb-4">
                        <div className='bg-[#f8f8f8] p-2 rounded-xl flex items-centers'>
                            <select name='formSelect' className="text-sm text-gray-600 bg-white border-none outline-none rounded-xl shadow-sm p-2">
                                <option>Paragraph</option>
                            </select>
                            <div className="flex items-center space-x-1 ml-4">
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded bg-white border-none outline-none rounded-xl shadow-sm p-2">
                                <Bold className="w-4 h-4 text-gray-600 " />
                                </button>
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded">
                                <Italic className="w-4 h-4 text-gray-600" />
                                </button>
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded">
                                <Underline className="w-4 h-4 text-gray-600" />
                                </button>
                                <div className="w-px h-4 bg-gray-300 mx-2"></div>
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded">
                                <List className="w-4 h-4 text-gray-600" />
                                </button>
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded">
                                <List className="w-4 h-4 text-gray-600" />
                                </button>
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded">
                                <Quote className="w-4 h-4 text-gray-600" />
                                </button>
                                <button onClick={showAlert} className="p-1 hover:bg-gray-100 rounded">
                                <Code className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <button onClick={showAlert} className="p-1 hover:bg-red-50 rounded text-red-500 rounded bg-[#ffd7d7] border-none outline-none rounded-xl shadow-sm p-2">
                            <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Text Input */}
                    <div className="mb-4 ">
                    <div className="flex items-start space-x-2">
                        <span className="text-gray-400">😊</span>
                        <textarea
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="How are you feeling today?"
                        className="flex-1 resize-none border-none outline-none text-gray-700 placeholder-gray-400 bg-transparent min-h-[60px]"
                        rows={3}
                        />
                    </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                    <div className="flex items-center space-x-3">
                        <button onClick={showAlert} className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors rounded bg-[#f8f8f8] border-none outline-none rounded-xl shadow-sm p-2">
                        <Plus className="w-5 h-5 text-gray-600" />
                        </button>
                        <button onClick={showAlert} className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors">
                        <Mic className="w-5 h-5 text-gray-600" />
                        </button>
                        <button onClick={showAlert} className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors">
                        <VideoIcon className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                    <button
                        onClick={handlePost}
                        disabled={!newPostContent.trim()}
                        className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full transition-colors"
                    >
                        <Send className="w-5 h-5 text-white" />
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default NewPostCard;