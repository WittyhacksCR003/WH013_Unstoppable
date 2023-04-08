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
    filename = video.filename
    vid = mp.VideoFileClip(filename)
    audio = vid.audio
    audio_file_name_without_ext = filename.split('.mp4')[0]
    audio_file_name = "{}.wav".format(audio_file_name_without_ext)
    audio.write_audiofile(audio_file_name)
    
    recognizer = sr.Recognizer()
    
    audioFile = sr.AudioFile(audio_file_name)
    with audioFile as source:
        data = recognizer.record(source)
    text = recognizer.recognize_google(data, key=None)
    print(text)
    
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