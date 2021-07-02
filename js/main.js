const qs = (selector) => document.querySelector(selector)


const triggerChatbot = qs('#trigger-chatbot')

const state = {
    showChatBot: false
}
const timeline = gsap.timeline()
triggerChatbot.addEventListener('click', e => {
    if(state.showChatBot){
        timeline.to('.chatbot iframe', { opacity: 0 })
        .to('.chatbot iframe', {visibility: 'hidden'})
        state.showChatBot = false
    }
    else {
        gsap.to('.chatbot iframe', { visibility: 'visible', opacity: 1 })    
        state.showChatBot = true
    }
})