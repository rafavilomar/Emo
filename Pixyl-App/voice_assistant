import pyaudio
import pyttsx3
import speech_recognition as sr
r = sr.Recognizer()
print("I'm listening")
with sr.Microphone() as source:
    audio = r.listen(source)
    print("Recognizing")
    text = r.recognize_google(audio,language='eng-in')
    #print(text)
engineio = pyttsx3.init()
engineio = pyttsx3.init()
rate = engineio.getProperty('rate')
engineio.setProperty('rate', rate-40)
engineio.say(text)
engineio.runAndWait()
