from flask import Flask, request
from flask_cors import CORS, cross_origin

import moviepy.editor as mp
from google.cloud import speech_v1p1beta1 as speech
import nltk
from textblob import TextBlob
import speech_recognition as sr
from langdetect import detect

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/upload', methods=['POST'])
def upload():
    video = request.files['file']
    video.save(video.filename)  
    
    vid = mp.VideoFileClip("DSA Placement course __ Phase-1 Completed.mp4")
    audio = vid.audio
    audio.write_audiofile("file.wav")
    
    recognizer = sr.Recognizer()
    
    audioFile = sr.AudioFile("file.wav")
    with audioFile as source:
        data = recognizer.record(source)
    text = recognizer.recognize_google(data, key=None)
    print(text)
    
    nltk.download("vader_lexicon")
    from nltk.sentiment import SentimentIntensityAnalyzer
    analyzer = SentimentIntensityAnalyzer()
    sentiment_scores = analyzer.polarity_scores(text)
    sentiment = ""
    if sentiment_scores["compound"] >= 0.05:
        sentiment = "Positive"
    elif sentiment_scores["compound"] <= -0.05:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"
    print("Sentiment: ", sentiment)

    # Perform language detection and English fluency analysis
    language = detect(text)
    if language == "en":
        blob = TextBlob(text)
        fluency = blob.correct().string
        print("Fluency: ", fluency)
    else:
        print("Language is not English.")
    
    # Process the video as needed
    return 'Video uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)