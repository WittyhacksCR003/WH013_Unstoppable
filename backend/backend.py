from flask import Flask, request
from flask_cors import CORS, cross_origin

import os
import speech_recognition as sr


app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/upload', methods=['POST'])
def upload():
    video = request.files['file']
    video.save(video.filename)  
    
    
    
    # Process the video as needed
    return 'Video uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)