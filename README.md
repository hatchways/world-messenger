# World Messenger: Converse with anyone with any language
[![CircleCI](https://circleci.com/gh/Harukine/world-messenger.svg?style=svg)](https://circleci.com/gh/Harukine/world-messenger)
## Intro & Goal
A seamless UI to exchange messages between two people who speak completely different languages. 
Think: FB Messenger with a built-in automatic translator. 
If we could more easily speak to others from around the world, we would be a more inclusive and connected world! 

## Who’s it for?
There are two main users: 
1. The sender:
The sender sends messages in his/her chosen language
2. The receiver
The receiver receives messages in his/her chosen language

For example: Sender speaks English and Receiver speaks Chinese. The Sender sends “what is your schedule for today?: 
and the receiver receives that message in Chinese. The receiver can then send Chinese back “I have 3 meetings and a dinner”, 
and the sender will receive this message back in English.

## Scope of Project:
- Create a platform for individuals to connect their email accounts and select their language choice (this is the language that all of their messages will be sent and received in)
- User can add contacts via email addresses. Only users that are connected (invitation to connect is accepted) can send each other messages (like Skype). 
- Use the Google Translate API to automatically translate messages 
- Referral system: if a user sends a message with the platform to a new user who isn’t a current user, it sends a unique referral code to join
- Accept/reject invitations to connect

## User Journey: Sender
**Context**: I’m on a leisurely trip in Guatemala and I rented a car from a local car rental shop. While driving, my car breaks down and I’m unsure what to do. I’m completely unfamiliar with the landscape and the process to report or fix a car. Someone has stopped on the side of the road to help me, but doesn’t speak a word of English. I need to explain what happened to the car and to see what I need to do since it’s a rental.
- I sign into my the app with my email address and I send an invite link to the Guatemalan who pulled over to their email address
- Once they’ve accepted my invite, we are automatically added as friends to talk with each other 
- I send them a message in English explaining how my car broke down
- The Guatemalan writes in Spanish a plan about how we can fix the car-- I receive the message back in English 

## User Journey: Receiver
**Context**: I’m a Guatemalan, Spanish-only speaking, that is driving and sees someone stopped on the side of the road. I pull over to see if I can help. I realize it is a tourist that only speaks English. She pulls out her phone and shows me an app and points for me to put my e-mail address in. Once I do so, I get a notification and follow the instructions. We’re now able to communicate with each other!
- I click the referral link I received in my e-mail and create a new account on the app
- In my account, I select Spanish as the language that I speak
- I receive a new message from the foreigner that explains how her car broke down
- I realize it is a rental car and type out in Spanish the process she needs to take to get it fixed

Features:
- [x] Sign up only with e-mail address
- [ ] Primary language is saved and can be changed in one’s settings
- [x] Login/sign up flow with e-mail address
- [ ] Referral link to sign up (automatically gets added as a friend if through a referral link)
- [x] Select primary language - what I send and receive in 
- [ ] Translate each message via Google Translate API
- [x] Accept friend request
- [x] Only have a contact in your list if you have mutually accepted an invite 
- [ ] Search for friends via e-mail address
- [ ] Group chat where a message may need to be translated into multiple languages per message
- [ ] Notifications for new/ unread messages
- [x] Messenger should be in real-time (i.e. you don’t need to refresh the page in order to see new messages)
- [ ] Users can send text and photos
- [ ] 3 dots button beside Thomas’ name options: settings (change primary language), logout 
- [ ] You can see who is currently “online” in your chat list
- [ ] You can see who has viewed your message (displayed by a small picture icon of the person who has viewed it)
- [ ] 3 dots beside ‘original language’ toggle: settings for specific chat (add new person to the chat, delete chat, block user)

Nice to have features:
- [ ] Seen messages
- [ ] Block users
- [ ] Toggle from translation to original language 
- [ ] Is typing... message

Not in scope:
- [ ] Login with phone number
- [ ] Share pictures / multimedia


