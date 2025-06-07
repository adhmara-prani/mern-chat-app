import {create} from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages})
}));

export default useConversation;
// now to create a hook to fetch these conversation from our backend (actually user.controller.js)