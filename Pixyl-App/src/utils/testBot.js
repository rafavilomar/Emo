export let conversation = [
  {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', from: 'user'},
  {text: 'Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.', from: 'bot'},
  {text: 'Lorem ipsum', from: 'bot'},
  {text: 'Lorem ipsum dolor sit', from: 'user'},
  {text: 'Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit', from: 'user'},
  {text: 'Lorem ipsum dolor sit amet, consectetur', from: 'bot'}
] 

export const greeting = (message) => {
  console.log(message)
  conversation.push({text: `${message}`, from: 'user'})
  conversation.push({text: `Hello ${message}!`, from: 'bot'}) 
}