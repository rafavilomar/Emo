from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

# Name this chatbot
botName = 'Pixyl'
bot = ChatBot(botName,
              logic_adapters=[
                  {
                      'import_path': 'chatterbot.logic.BestMatch',
                      'default_response': 'I am sorry, but I do not understand.',
                      'maximum_similarity_threshold': 0.90
                  }
              ]
              )

# 0.5 optional - Erase the database before start
bot.storage.drop()

# You may want to train your bot first, so there are to basic ways to do it

# 1 - Make simple conversations and fill the bot with these
#trainer = ListTrainer(bot)
#trainer.train([
 #   'How are you?',
  #  'I am good.',
   # 'That is good to hear.',
    #'Thank you',
    #'You are welcome.',
#])

# 1.5 - Train the bot with the corpus integrated
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english.greetings")

# There are other parameters where you can initialize the chatterbot, like:
# 1- database_uri - host of the database
# 2- storage adapter - default the SQLite
# 3- logical adapters - idk if they are called when you request a response or the create the response itself, there are
#    many of them, like MathematicalEvaluation or TimeLogicAdapter, you can use everyone but you need to call them in a
#    string array


# To Start the chatbot, you can create a while loop to break only on Ctrl+C command
while True:
    try:
        request = input("You: ")
        response = bot.get_response(request)
        print(f'{botName}: ', response)
    except(KeyboardInterrupt, EOFError, SystemExit):
        break
