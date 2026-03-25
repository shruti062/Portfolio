from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Load CSV
csv_path = "spotify-2023.csv"
try:
    df = pd.read_csv(csv_path, encoding='latin1')
    df = df.fillna("")
    df['id'] = df.index  # Add unique ID per song
except FileNotFoundError:
    print(f"Error: {csv_path} not found.")
    df = pd.DataFrame()

@app.route('/')
def index():
    q = request.args.get("q", "").lower()
    if 'track_name' in df.columns and 'artist(s)_name' in df.columns:
        if q:
            filtered = df[df['track_name'].str.lower().str.contains(q) | df['artist(s)_name'].str.lower().str.contains(q)]
        else:
            filtered = df
    else:
        filtered = pd.DataFrame()
    return render_template("music.html", songs=filtered.to_dict(orient='records'))

@app.route('/song/<int:song_id>')
def song_detail(song_id):
    if song_id < 0 or song_id >= len(df):
        return "Song not found", 404
    song = df.iloc[song_id].to_dict()
    return render_template("song_detail.html", song=song)

@app.route('/albums')
def albums():
    return "<h2>Albums page coming soon!</h2>"

@app.route('/artists')
def artists():
    return "<h2>Artists page coming soon!</h2>"

if __name__ == "__main__":
    app.run(debug=True)
